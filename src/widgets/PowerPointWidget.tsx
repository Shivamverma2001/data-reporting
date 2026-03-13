import React, { useState } from 'react';
import PortfolioAllocation from './PortfolioAllocation';

const PowerPointWidget = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [activeTemplate, setActiveTemplate] = useState('template1'); // Add template state

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="h-[10%] bg-gray-200 flex items-center justify-between px-4 w-full">
        <button className="px-3 py-2 bg-blue-500 text-white rounded">Button 1</button>
        {/* Dropdown to select template */}
        <div className="mb-4">
          <select
            id="template-select"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            value={activeTemplate}
            onChange={(e) => setActiveTemplate(e.target.value)} // Update active template on selection
          >
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            <option value="template3">Template 3</option>
          </select>
        </div>
        <button className="px-3 py-2 bg-blue-500 text-white rounded">Button 3</button>
        <button className="px-3 py-2 bg-blue-500 text-white rounded">Button 4</button>
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="px-3 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Drawer
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-grow">
        {/* Drawer */}
        {isDrawerOpen && (
          <div className="bg-gray-100 border-r h-full border-gray-300 p-4" style={{ width: "300px" }}>
            <ul className="space-y-2">
              {/* Pass activeTemplate prop to PortfolioAllocation */}
              <PortfolioAllocation template={activeTemplate} />
            </ul>
          </div>
        )}

        {/* Main Content Area */}
        <div className={`flex-grow p-6 bg-white`} style={{width :"60%"}}>
          {/* Pass activeTemplate prop to PortfolioAllocation */}
          <PortfolioAllocation template={activeTemplate} />
        </div>
        {/* Drawer */}
        {isDrawerOpen && (
          <div
            className="bg-gray-100 border-l border-gray-300 p-4 fixed right-0 h-full"
            style={{ width: "300px" }}
          >
            <ul className="space-y-2">
              {/* Pass activeTemplate prop to PortfolioAllocation */}
              <PortfolioAllocation template={activeTemplate} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PowerPointWidget;
