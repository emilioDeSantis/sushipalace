"use client";
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/hero1.png',  // Update these paths to your images
    '/hero2.png',
    '/hero3.png',
    '/hero4.png',
    '/hero5.png',
    '/hero6.png',
    '/hero7.png',
    '/hero8.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Switch image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      overflow: 'hidden'
    }}>
      {images.map((src, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        ></div>
      ))}
      <div style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        // paddingBottom: '3rem',
        flexDirection: 'column',
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center',
          background: 'linear-gradient(0, #121415, #12141500)',
          width: '100%',
          paddingBlock: '3rem',
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: '0.52em',
          zIndex: 2,
        }}>Hollywood</h1>
      </div>
    </div>
  );
};

export default Hero;
