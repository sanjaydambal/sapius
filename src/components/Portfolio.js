import React from 'react';
import Slider from "react-slick";


const images = [
  { url: "/assets/Minh.jpeg", description: (
    <>
      <p>Dr. Minh Duong-van</p>
      <p>CHIEF TECHNOLOGY OFFICER</p>
      <p>With a PhD in quantum physics from Cornell University. Dr. Minh specializes in quantum field and chaos theory.</p>
    </>
  ) },
  { url: "/assets/May.jpeg",  description: (
    <>
      <p>May Siksik, PhD</p>
      <p>CEO</p>
      <p>20+ years in tech with executive & strategic partnership roles, current CEO Canadian Innovation network</p>
    </>
  ) },
  { url: "/assets/Robert.jpeg", description: (
    <>
      <p>Dr. Robert Scott MD.</p>
      <p>CHIEF CLINICAL OFFICER</p>
      <p>27+ years in medical practice, informatics research and education Developed consumer-centric diagnostic tools, enhanced patient</p>
    </>
  ) },
  { url: "/assets/Ray.jpg", description: (
    <>
      <p>Ray Simkus, MD</p>
      <p>CHIEF MEDICAL OFFICER</p>
      <p>45 years as a primary care physician, 30+ in medical informatics

Consultant for Canada Health Infoway, BC Ministry of Health pro </p>
    </>
  ) },
  { url: "/assets/kiran.png", description: (
    <>
      <p>Kiran Chandrashekhar</p>
      <p>DIRECTOR OF ENGINEERING</p>
      <p>2Over 15 years of diverse experience in the tech industry across different roles.
</p>
    </>
  ) },
  { url: "/assets/Arun.jpeg", description: (
    <>
      <p>May Siksik, PhD</p>
      <p>CEO</p>
      <p>20+ years in tech with executive & strategic partnership roles, current CEO Canadian Innovation network</p>
    </>
  ) },
];

const Portfolio = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 images at once
    slidesToScroll: 1, // Move one slide at a time
    autoplay: true,
    autoplaySpeed: 2000, // Auto-scroll every 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides for medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides for smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide for extra small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-left mb-8">Our Team</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-66 object-cover rounded-lg shadow-lg" 
            />
            <p className="text-center mt-4 h-24 ">{image.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
