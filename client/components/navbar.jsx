import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-white font-semibold text-lg">Logo</a>
            </Link>
          </div>
          <div className="flex">
            <Link href="/about">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
