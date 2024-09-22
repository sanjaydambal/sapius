import React, { useState } from 'react';

const Accordion = ({ title, children, imageUrl, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left flex justify-between items-center p-4 hover:bg-gray-100"
        onClick={onClick}
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="flex justify-between items-start px-4 pb-4 text-gray-700">
          <div className="w-3/4 text-justify">
            {children}
          </div>
          {imageUrl && (
            <div className="w-1/4">
              <img 
                src={imageUrl} 
                alt={title} 
                className="rounded-lg object-cover h-24 w-24 ml-auto"  
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TeamAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index); 
  };

  return (
    <div className="max-w-full mx-auto mt-24 bg-white shadow-lg rounded-lg w-4/5" style={{
      background: 'linear-gradient(180deg, #F6FBFC 5.36%, rgba(247, 249, 251, 0) 86.86%)'
    }}>
      <Accordion
        title="Dee Choy CHIEF FINANCIAL OFFICER"
        imageUrl={`${process.env.PUBLIC_URL}/assets/Dee.jpeg`}
        isOpen={activeAccordion === 0}
        onClick={() => handleAccordionClick(0)}
      >
        <p>Dee Choy</p>
        <p>CHIEF FINANCIAL OFFICER</p>
        <p>Responsible for managing the company's finances, including financial planning, risk management, and record-keeping.</p>
      </Accordion>
      <Accordion
        title="Dr. Ray Simkus CHIEF MEDICAL OFFICER"
        imageUrl={`${process.env.PUBLIC_URL}/assets/Ray.jpg`}
        isOpen={activeAccordion === 1}
        onClick={() => handleAccordionClick(1)}
      >
        <p>Dr. Ray Simkus</p>
        <p>CHIEF MEDICAL OFFICER</p>
        <p>Leads the company's clinical development and medical strategy, ensuring high-quality healthcare solutions.</p>
      </Accordion>
      <Accordion
        title="Dr. Eva Idanwekhai SENIOR MEDICAL ADVISER"
        imageUrl={`${process.env.PUBLIC_URL}/assets/Eva.jpeg`}
        isOpen={activeAccordion === 2}
        onClick={() => handleAccordionClick(2)}
      >
        <p>Dr. Eva Idanwekhai</p>
        <p>SENIOR MEDICAL ADVISER</p>
        <p>Provides expert medical advice and guidance, contributing to health-related decision-making and policy development.</p>
      </Accordion>
      <Accordion
        title="Gary Bizo DIRECTOR OF MARKETING"
        imageUrl={`${process.env.PUBLIC_URL}/assets/gary.jpeg`}
        isOpen={activeAccordion === 3}
        onClick={() => handleAccordionClick(3)}
      >
        <div>
          <p>Gary Bizo</p>
          <p>DIRECTOR OF MARKETING</p>
          <p>Gary Bizo is the Adjunct Professor (Digital Marketing) at MBA School of Business, NYIT.</p>
          <p>Has worked for Microsoft, IBM, Huawei.</p>
        </div>
      </Accordion>
      <Accordion
        title="Scott Addison DIRECTOR OF SALES"
        imageUrl={`${process.env.PUBLIC_URL}/assets/scott.jpeg`}
        isOpen={activeAccordion === 4}
        onClick={() => handleAccordionClick(4)}
      >
        <p>Scott Addison</p>
        <p>DIRECTOR OF SALES</p>
        <p>Oversees sales strategy and operations to drive business growth and meet revenue targets.</p>
      </Accordion>
      <Accordion
        title="Kiran Chandrashekhar DIRECTOR OF ENGINEERING"
        imageUrl={`${process.env.PUBLIC_URL}/assets/kiran.png`}
        isOpen={activeAccordion === 5}
        onClick={() => handleAccordionClick(5)}
      >
        <p>Kiran Chandrashekhar</p>
        <p>DIRECTOR OF ENGINEERING</p>
        <p>Leads the engineering team, ensuring innovative product development and system architecture.</p>
      </Accordion>
      <Accordion
        title="Arun Chand BUSINESS ADVISER"
        imageUrl={`${process.env.PUBLIC_URL}/assets/Arun.jpeg`}
        isOpen={activeAccordion === 6}
        onClick={() => handleAccordionClick(6)}
      >
        <p>Arun Chand</p>
        <p>BUSINESS ADVISER</p>
        <p>Provides strategic business advice and guidance, specializing in corporate growth and financial planning.</p>

        </Accordion>
      <Accordion
        title="Dr. Ted Robinson MD BUSINESS ADVISER"
        imageUrl={`${process.env.PUBLIC_URL}/assets/ted.jpeg`}
        isOpen={activeAccordion === 7}
        onClick={() => handleAccordionClick(7)}
      >
        <p>Dr. Ted Robinson</p>
        <p>MD BUSINESS ADVISER</p>
        <p>Advises on medical business strategies, helping to shape the company's healthcare offerings.</p>
      </Accordion>
      <Accordion
        title="Austin Duong-van SOFTWARE ARCHITECT"
        imageUrl={`${process.env.PUBLIC_URL}/assets/austin.jpeg`}
        isOpen={activeAccordion === 8}
        onClick={() => handleAccordionClick(8)}
      >
        <p>Austin Duong-van</p>
        <p>SOFTWARE ARCHITECT</p>
        <p>Designs the software systems and architecture, ensuring scalable and maintainable solutions.</p>
      </Accordion>
      <Accordion
        title="Dr. Darren Warburton EDITOR IN CHIEF"
        imageUrl={`${process.env.PUBLIC_URL}/assets/Darren.jpeg`}
        isOpen={activeAccordion === 9}
        onClick={() => handleAccordionClick(9)}
      >
        <p>Dr. Darren Warburton</p>
        <p>EDITOR IN CHIEF</p>
        <p>Leads the editorial team, ensuring the publication of high-quality content across various platforms.</p>
      </Accordion>
      <Accordion
        title="Dr. Jack Taunton MSc. MD EDITOR PRIMARY PREVENTION"
        imageUrl={`${process.env.PUBLIC_URL}/assets/jack.jpeg`}
        isOpen={activeAccordion === 10}
        onClick={() => handleAccordionClick(10)}
      >
        <p>Dr. Jack Taunton</p>
        <p>MSc. MD EDITOR PRIMARY PREVENTION</p>
        <p>Oversees content related to primary prevention strategies, focusing on health education and awareness.</p>
      </Accordion>
      <Accordion
        title="Dr. Sandra Cortina MD EDITOR OBESITY"
        imageUrl={`${process.env.PUBLIC_URL}/assets/sandra.jpeg`}
        isOpen={activeAccordion === 11}
        onClick={() => handleAccordionClick(11)}
      >
        <p>Dr. Sandra Cortina</p>
        <p>MD EDITOR OBESITY</p>
        <p>Leads content development on obesity prevention and treatment, advocating for healthy lifestyle choices.</p>
      </Accordion>
    </div>
  );
};

export default TeamAccordion;
