import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (process.browser) {
      ScrollReveal().reveal('.animate', {
        duration: 1000,
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        reset: true,
      });
      setIsVisible(true);
    }
  }, []);

  return <div className={`animate ${isVisible ? 'visible' : ''}`}>{children}</div>;
};

export default ScrollAnimation;
