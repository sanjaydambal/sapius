import React from 'react'

const Header = () => {
    return (
        <div>
             <header className="bg-white shadow flex justify-between">
          <div className="container px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
  <a href="/">
    <img src="/assets/sapius_logo.png" alt="Sapius Logo" className="h-8 w-auto" />
  </a>
</div>

    
            {/* Navigation Links */}
            <nav >
              <ul className="flex space-x-6">
                <li>
                  <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
                </li>
                <li>
                  <a href="/consumers" className=" bg-[#001339] text-gray-600 hover:text-blue-600">Consumers</a>
                </li>
                <li>
                  <a href="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</a>
                </li>
                <li>
                  <a href="/enterprises" className="text-gray-600 hover:text-blue-600">Enterprises</a>
                </li>
                <li>
                <a
                      href="/login"
                      className="text-white text-center font-semibold text-[18px]"
                      style={{
                        fontFamily: 'Metropolis, sans-serif',
                        width: '93px',
                        height: '42px',
                        padding: '12px 20px',
                        borderRadius: '5px 0px 0px 0px',
                        backgroundColor: '#B2E1FA',
                        color: '#001839',
    
                        lineHeight: '18px',
                        boxShadow: '0px 10px 15px -3px rgba(28, 157, 227, 0.1), 0px 4px 6px -2px rgba(28, 157, 227, 0.05)',
                        opacity: 1
                      }}
                    >
                      Login
                    </a>
                  </li>
              </ul>
            </nav>
    
          </div>
        </header>
        </div>
      )
}

export default Header