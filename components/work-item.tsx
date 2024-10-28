"use client";

import { useIsVisible } from "@/hooks/element-boundary";
import React from "react";

export interface WorkItemProps {
  position: string;
  companyName: string;
  contractType: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export default function WorkItem({
  position,
  companyName,
  contractType,
  startDate,
  endDate,
  description,
}: WorkItemProps) {
  const durations = [
    "duration-300",
    "duration-500",
    "duration-700",
    "duration-1000",
  ];
  const selectDuration =
    durations[Math.floor(Math.random() * durations.length)];
  const workItemRef = React.useRef<HTMLDivElement>(null);
  const workitemIsVisible = useIsVisible(workItemRef);
  return (
    <div
      ref={workItemRef}
      className={`flex flex-col ${workitemIsVisible ? "opacity-100" : "opacity-0"} ease-in ${selectDuration}`}
    >
      <p className="text-2xl md:text-4xl lg:text-4l font-solanelLight">
        {position}
      </p>
      <p className="text-xl md:text-2xl lg:text-2xl opacity-55 font-solanelLight">
        {contractType}
      </p>
      <p className="text-xl md:text-2xl lg:text-2xl font-solanelLight">
        {companyName}
      </p>
      <p className="text-300 font-solanelBold">
        {startDate} - {endDate}
      </p>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 font-solanelRegular">
        {description.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
