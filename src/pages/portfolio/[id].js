import { useRouter } from "next/router";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioPage = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route parameter

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: "portfolioAllocation", label: "Portfolio Allocation" },
    { id: "performanceReview", label: "Performance Review" },
    { id: "exposure", label: "Portfolio Exposure & Returns" },
    { id: "investments", label: "Direct Investments" },
    { id: "cashEquivalence", label: "Cash & Cash Equivalence" },
    { id: "liabilities", label: "Liabilities" },
    { id: "fixedIncome", label: "Fixed Income" },
    { id: "securities", label: "Securities" },
  ];

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  // Function to generate a unique ID
  const generateUniqueId = () => {
    return `portfolio-${Math.random().toString(36).substring(2, 15)}`; // Generate random ID
  };

  const handleGenerate = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item to generate the portfolio.");
      return;
    }

    // Generate a unique ID
    const uniqueId = generateUniqueId();

    // Redirect to the editor page with the unique ID
    router.push(`/editor/${uniqueId}?selectedItems=${selectedItems.join(",")}`);
  };

  // Step 1: Handle Cancel - go back to the previous page
  const handleCancel = () => {
    router.back(); // Go back to the previous route
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 space-y-6">
      <Card className="w-[800px]">
        <CardHeader>
          <CardTitle>Portfolio Editor</CardTitle>
          <CardDescription>Manage your portfolio components for customer {id}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 gap-4"> {/* Use Tailwind CSS Grid */}
            {items.map((item) => (
              <li key={item.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={item.id}
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={item.id} className="text-gray-700 text-sm">
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* Cancel button calls router.back() to go back to the previous page */}
          <Button variant="outline" onClick={handleCancel}>Cancel</Button>
          <Button variant="outline" onClick={handleGenerate}>Generate</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PortfolioPage;
