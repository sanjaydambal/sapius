import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-start flex-col">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/sapius_logo.png`} alt="Sapius Logo" className="h-8 w-auto" />
          </Link>
          <p className="text-gray-400 text-sm mt-2">Reach out to us for queries at </p>
          <br />
          <p className="text-gray-600 text-sm mt-0">
            <Link to="mailto:info@sapius.ai" className="text-blue-500 hover:underline">info@sapius.ai</Link>
          </p>
          <div className="flex items-center space-x-2 mt-4">
            <Link to="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 h-6 w-6" />
            </Link>
            <p 
              className="text-dark" 
              style={{
                fontFamily: 'Metropolis',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '25px',
                textAlign: 'left',
              }}
            >
              LinkedIn
            </p>
          </div>
        </div>
        <div className="flex space-x-24 -mt-9">

          <div className='ml-20'>
            <h3 className="text-gray-400 text-sm font-medium mb-2 mt-0">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:underline">Privacy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:underline">Terms</Link></li>
              <li><Link to="#" className="text-gray-600 hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div className='ml-20'>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:underline">About</Link></li>
              <li><Link to="#" className="text-gray-600 hover:underline">Reviews</Link></li>
            </ul>
          </div>
          <div className='ml-20'>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:underline">Doctors</Link></li>
              <li><Link to="#" className="text-gray-600 hover:underline">Enterprises</Link></li>
              <li><Link to="#" className="text-gray-600 hover:underline">Consumers</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
