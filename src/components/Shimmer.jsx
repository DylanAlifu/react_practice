import React from "react";

const Shimmer = () => {
  return Array(30)
    .fill(0)
    .map((_m, i) => (
      <div key={i} className="border border-black m-3 p-4 w-72 rounded-lg">
        <div className="w-64 h-64 bg-slate-300"></div>
      </div>
    ));
};

export default Shimmer;
