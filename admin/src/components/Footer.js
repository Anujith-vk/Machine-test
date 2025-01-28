import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [winwidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-gray-900 flex gap-2 justify-between items-center py-0 px-8 sm:px-4 sm:flex-col sm:py-2'>
      {winwidth > 426 ? (
        <div className='flex  sm:flex-col md:flex-row justify-between items-center w-full md:px-[150px] sm:p-0'>
          <div className="flex items-center">
            <p className="text-[#857878] text-sm font-Lato">© 2024 Deepnetsoft Solutions. All rights reserved.</p>
          </div>
          <div className="flex gap-5">
            <p className="text-[#857878] text-sm font-Lato">Terms & Conditions</p>
            <p className="text-[#857878] text-sm font-Lato">Privacy Policy</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <p className="text-[#857878] text-xs font-Lato">© 2024 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
          </div>
          <div className="flex gap-5">
            <p className="text-[#857878] text-xs font-Lato">Terms & Conditions</p>
            <p className="text-[#857878] text-xs font-Lato">Privacy Policy</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
