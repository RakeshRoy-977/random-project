import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Your Logo</span>
          </div>
          <div className="hidden md:flex">
            <ul className="flex space-x-6 text-white">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Department
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Government
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  How do I
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">{/* Hamburger menu */}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
