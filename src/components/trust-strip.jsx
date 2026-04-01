import React from "react";

const TrustStrip = () => {
  return (
    <div className="bg-primary-md text-secondary/70 uppercase">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          Supplying eco-textile brands in Europe, Japan & North America
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          Semi-processed raw fiber — fully customs-documented
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          Wild-harvested · Zero chemicals · Community-fair wages
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
