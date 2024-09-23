import React from 'react';

const Story = () => {
  return (
    <div className="bg-white py-12 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative z-10">
          <img
            src={`${process.env.PUBLIC_URL}/assets/about.png`}
            alt="Team Meeting"
            className="rounded-lg shadow-lg"
            style={{ width: '375px', height: '600px', marginLeft: '200px' }}
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-start" style={{ paddingLeft: '20px' }}>
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center md:text-left">
            Our story
          </h2>
          <p className="text-gray-600 text-justify mb-1 text-center md:text-left" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
            vhgvncncb bn nbvnbvnbvnbvn
          </p>
          <p className="text-gray-600 text-justify text-center md:text-left mt-2" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Quis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
        </div>
      </div>


      <div 
        style={{
          width: '100%',
          height: '250px',
          backgroundColor: '#F6FBFC',
          position: 'absolute',
          bottom: 0,
          zIndex: 1,
          clipPath: 'polygon(0 100%, 100% 100%, 0 0)',
          // display: 'none',
          // '@media (min-width: 768px)': {
          //   display: 'block',
          // },
        }}
      />
    </div>
  );
};

export default Story;
