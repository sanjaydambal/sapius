import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-start flex-col">
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/assets/sapius_logo.png`} alt="Sapius Logo" className="h-8 w-auto" />
          </a>
          <p className="text-gray-400 text-sm mt-2">Reach out to us for queries at </p>
          <br />
          <p className="text-gray-600 text-sm mt-0">
            <a href="mailto:info@sapius.ai" className="text-blue-500 hover:underline">info@sapius.ai</a>
          </p>
          <div className="flex items-center space-x-2 mt-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 h-6 w-6" />
            </a>
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
              <li><a href="#" className="text-gray-600 hover:underline">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className='ml-20'>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">About</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Reviews</a></li>
            </ul>
          </div>
          <div className='ml-20'>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Doctors</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Enterprises</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Consumers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
