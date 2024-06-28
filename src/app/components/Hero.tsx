"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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
    const initialDelay = isInitialLoad ? 2000 : 4000;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsInitialLoad(false);
    }, initialDelay); // Switch image every 4 seconds after the initial 2 seconds

    return () => clearInterval(interval);
  }, [isInitialLoad]);

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
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        >
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            alt={`Hero Image ${index + 1}`}
          />
        </div>
      ))}
      <div style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
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
