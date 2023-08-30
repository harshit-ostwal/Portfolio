import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal('.animate', {
      delay: 200,
      duration: 100,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      reset: true,
    });
  }, []);

  return <div className="animate">{children}</div>;
};

export default ScrollAnimation;
