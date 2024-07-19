import React from "react";
import DetailItem from "./DetailItem";

const TodayDetails = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="font-bold text-2xl mb-6">Today’s Highlights</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
      </div>
    </div>
  );
};

export default TodayDetails;
