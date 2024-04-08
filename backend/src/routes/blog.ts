import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const blogRouter = new Hono<{
  Variables: {
    userId: string;
  };
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "Error by User",
      });
    }
    next();
  } catch (error) {
    return c.json({ message: "Error in Log in" });
  }
});

blogRouter.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const userId = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(userId),
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (error) {
    return c.json({ message: "Creation failed! Error" });
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      id: blog.id,
    });
  } catch (error) {
    return c.json({ message: "No Updation! Fix the Credentials" });
  }
});

//Todo:pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const totalCount = await prisma.blog.count();
    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blogs,
      totalCount,
    });
  } catch (error) {
    return c.json({ message: "Fetch failed!" });
  }
});

blogRouter.get("/:id", async (c) => {
  try {
    const id = await c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blog,
    });
  } catch (error) {
    return c.json("Invalid Fetch");
  }
});
