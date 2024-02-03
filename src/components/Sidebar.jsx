import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 w-64 h-screen">
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Vision 2035 Overview
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Projects & Timeline
            </Link>
          </li>
          <li>
            <Link
              to="/why-downtown"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Why Downtown? Why Now?
            </Link>
          </li>
          <li>
            <Link
              to="/goals"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Goals of Downtown Revitalization
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Community Feedback and Input
            </Link>
          </li>
          <li>
            <Link
              to="/campaign"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Beau-lieve Campaign
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Testimonial Videos
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              FAQ - Downtown Beaumont Plan
            </Link>
          </li>
          <li>
            <Link
              to="/share-ideas"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Share Your Ideas
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              Become a Beau-liever (Show Your Support)
            </Link>
          </li>
          <li>
            <Link
              to="/state-of-city"
              className="block text-gray-300 hover:text-white transition duration-300"
            >
              State of the City 2023: Building for the Future
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
