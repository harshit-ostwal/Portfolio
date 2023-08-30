'use client';
import ScrollToTop from "react-scroll-to-top";

const BottomToTop = () => {
    return (
      <ScrollToTop
        className='animate-bounce 1s flex items-center justify-center'
        smooth
        style={{
          backgroundColor: 'cyan',
        }}
        viewBox="0 0 24 24"
        svgPath="m18 15-6-6-6 6"
      />
    );
  };

  export default BottomToTop;