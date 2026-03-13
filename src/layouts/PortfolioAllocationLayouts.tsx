import React, { useState, useEffect, useRef } from 'react';
import DonutChartWidget from '../widgets/DonutChartWidget';
import AreaChart1 from '../widgets/AreaChart1';

// Layout 1
export const Layout1 = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width whenever the window resizes
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial update and on resize
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6 w-full">
      {/* Row for PieCharts */}
      <div className="flex justify-between" ref={containerRef}>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex justify-center">
              <div className="min-w-2 min-h-2 w-full max-w-xs p-4 bg-white rounded-lg shadow-md">
                <DonutChartWidget parentWidth={containerWidth} />
              </div>
            </div>
          ))}
      </div>

      {/* Row for Area Chart */}
      <div className="flex justify-center">
        <div className="w-full lg:w-3/4 xl:w-2/3 p-6 bg-white">
          <AreaChart1 />
        </div>
      </div>
    </div>
  );
};

// Layout 2
export const Layout2 = () =>{
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width whenever the window resizes
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial update and on resize
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
return (
  
  <div className="container mx-auto p-6 space-y-6 w-full">
    {/* Vertical layout */}
    <div className="flex flex-col items-center" ref={containerRef}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md">
            <DonutChartWidget parentWidth={containerWidth}/>
          </div>
        ))}
    </div>
    <div className="flex justify-center mt-6">
      <div className="w-full lg:w-3/4 xl:w-2/3 p-6 bg-white">
        <AreaChart1 />
      </div>
    </div>
  </div>
);
}

// Layout 3
export const Layout3 = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Update container width whenever the window resizes
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial update and on resize
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  return (
  <div className="container mx-auto p-6 space-y-6 w-full">
    {/* Grid layout */}
    <div className="grid grid-cols-3 gap-1" ref={containerRef}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <DonutChartWidget parentWidth={containerWidth}/>
          </div>
        ))}
    </div>
    <div className="col-span-2 p-6 bg-white">
      <AreaChart1 />
    </div>
  </div>
);
}