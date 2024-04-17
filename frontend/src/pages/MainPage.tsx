import Navbar from "@/components/Navbar";
import React from "react";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-slate-200 h-screen">
        <div className="items-center justify-center p-2">
          <div className="font-extrabold text-7xl p-4 ">
            <div className="flex">
              <div className="italic font-normal">Welcome to the</div> <br></br>
              <div className="pl-3">Blog-It</div>{" "}
            </div>
          </div>

          <div className="font-light p-4">
            Tantalizing tales, captivating chronicles, and thoughtful tirades.
            Diving deep into the whims and wonders of the world. Join us as we
            explore the extraordinary in the ordinary, one word at a time.
          </div>
          <div className="p-4"></div>
        </div>
      </div>
    </>
  );
}
