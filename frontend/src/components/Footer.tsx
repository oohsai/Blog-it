export default function Footer() {
  return (
    <div>
      <div className=" mx-auto">
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              target="_blank"
              className="flex items-center mb-4 sm:mb-0"
            >
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Connect with me
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:underline ">
                  <a href="http://github.com/oohsai">Github</a>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
