'use client';

import React, { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Label } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { browser: "Chrome", visitors: 275, fill: "#ff0000" },
  { browser: "Safari", visitors: 200, fill: "#00ff00" },
  { browser: "Firefox", visitors: 287, fill: "#0000ff" },
  { browser: "Edge", visitors: 173, fill: "#ff00ff" },
  { browser: "Other", visitors: 190, fill: "#00ffff" },
];

const DonutChartWidget = ({ parentWidth }) => {
  const chartRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 }); // Default dimensions

  // Update chart dimensions based on the parent width, with max width of 300px
  useEffect(() => {
    if (parentWidth > 0) {
      const newWidth = Math.min(parentWidth, 300); // Ensure the width doesn't exceed 300px
      setDimensions({ width: newWidth/2, height: newWidth/3 });
    }
  }, [parentWidth]);

  const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);

  // Dynamically calculate font size based on the chart width
  const calculateFontSize = (width) => {
    const baseFontSize = width / 20;
    return Math.max(baseFontSize, 16); // Ensure font size doesn't go below 16px
  };

  // Dynamically calculate the innerRadius and outerRadius based on the chart width
  const calculateRadius = (width) => {
    const innerRadius = width / 10;  // Adjust the fraction for innerRadius as needed
    const outerRadius = width / 5;  // Adjust the fraction for outerRadius as needed
    return { innerRadius, outerRadius };
  };

  const { innerRadius, outerRadius } = calculateRadius(dimensions.width);

  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader className="items-center pb-0 text-center">
        <CardTitle>Pie Chart Example</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex justify-center">
        <div className="mx-auto w-full max-w-[300px]" ref={chartRef}>
          {dimensions.width > 0 && dimensions.height > 0 && (
            <PieChart width={dimensions.width} height={dimensions.height}>
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                fill="#8884d8"
                stroke="#fff"
                strokeWidth={2}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      const fontSizeMain = calculateFontSize(dimensions.width);
                      const fontSizeSecondary = Math.max(dimensions.width / 25, 12); // Adjust font size for secondary label

                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy - 16}
                            style={{ fontSize: fontSizeMain }} // Main font size based on width
                            className="fill-foreground font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy + 16}
                            style={{ fontSize: fontSizeSecondary }} // Smaller font size for secondary label
                            className="fill-muted-foreground"
                          >
                            Visitors
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm text-center">
        <div className="flex items-center gap-2 font-medium leading-none justify-center">
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default DonutChartWidget;
