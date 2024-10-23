import React from "react";

const MemeCard = ({ data }) => {
  const { title, url } = data;

  return (
    <div className="border border-black m-3 p-4 w-72 rounded-lg shadow-lg">
      <p>{title}</p>
      <img src={url} alt="memes" className="w-64 h-64" />
    </div>
  );
};

export { MemeCard };
