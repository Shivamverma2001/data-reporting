'use client';

import React from "react";
import { PieChart, Pie, Label } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { browser: "Chrome", visitors: 275, fill: "#ff0000" },
  { browser: "Safari", visitors: 200, fill: "#00ff00" },
  { browser: "Firefox", visitors: 287, fill: "#0000ff" },
  { browser: "Edge", visitors: 173, fill: "#ff00ff" },
  { browser: "Other", visitors: 190, fill: "#00ffff" },
];

const PieChartWidget = () => {
  const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);

  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader className="items-center pb-0 text-center">
        <CardTitle>Pie Chart Example</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex justify-center">
        <div className="mx-auto aspect-square w-full max-w-[300px]">
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              outerRadius={120}
              fill="#8884d8"
              stroke="#fff"
              strokeWidth={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy - 16} className="fill-foreground text-2xl font-bold">
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={viewBox.cy + 16} className="fill-muted-foreground">
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
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

export default PieChartWidget;
