import React, { useState } from 'react';
import { Layout1, Layout2, Layout3 } from '../layouts/PortfolioAllocationLayouts';
import templates from '../templates/template'; // Import templates

const PortfolioAllocation = ({template}) => {
  const [activeLayout, setActiveLayout] = useState('layout1'); // Default layout
  const [activeTemplate, setActiveTemplate] = useState('template1'); // Default template

  // Map layout names to components
  const layoutComponents = {
    layout1: <Layout1 />,
    layout2: <Layout2 />,
    layout3: <Layout3 />,
  };

  // Get the current template's styles
  const templateStyles = templates[template];

  return (
    <div 
      className="container mx-auto p-6"
      style={{
        backgroundColor: templateStyles.backgroundColor,
        color: templateStyles.color,
        fontSize: templateStyles.fontSize,
        fontFamily: templateStyles.fontFamily,
      }}
    >

      {/* Dropdown to select layout */}
      <div className="mb-4">
        <label htmlFor="layout-select" className="mr-4 font-medium">
          Select Layout:
        </label>
        <select
          id="layout-select"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          value={activeLayout}
          onChange={(e) => setActiveLayout(e.target.value)}
        >
          <option value="layout1">Layout 1</option>
          <option value="layout2">Layout 2</option>
          <option value="layout3">Layout 3</option>
        </select>
      </div>

      {/* Render the active layout */}
      {layoutComponents[activeLayout]}
    </div>
  );
};

export default PortfolioAllocation;
