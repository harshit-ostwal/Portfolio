'use client';
import React, { FC, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: FC<ScrollAnimationProps> = ({ children }) => {
  useEffect(() => {
    const scrollReveal = ScrollReveal();
    scrollReveal.reveal('.animate', {
      duration: 1000,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      reset: true,
    });
  }, []);

  return <div className="animate">{children}</div>;
};

export default ScrollAnimation;
