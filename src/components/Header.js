import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/sapius_logo.png`}
              alt="Sapius Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/consumers"
                className=" bg-[#001339] text-gray-600 hover:text-blue-600"
              >
                Consumers
              </Link>
            </li>
            <li>
              <Link to="/doctors"
                className="text-gray-600 hover:text-blue-600"
              >
                Doctors
              </Link>
            </li>
            <li>
              <Link to="/enterprises"
                className="text-gray-600 hover:text-blue-600"
              >
                Enterprises
              </Link>
            </li>
            <li>
              <Link to="/login"
                className="text-white text-center font-semibold text-[18px]"
                style={{
                  fontFamily: "Metropolis, sans-serif",
                  width: "93px",
                  height: "42px",
                  padding: "12px 20px",
                  borderRadius: "5px 0px 0px 0px",
                  backgroundColor: "#B2E1FA",
                  color: "#001839",
                  lineHeight: "18px",
                  boxShadow:
                    "0px 10px 15px -3px rgba(28, 157, 227, 0.1), 0px 4px 6px -2px rgba(28, 157, 227, 0.05)",
                  opacity: 1,
                }}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;