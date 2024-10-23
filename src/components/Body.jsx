import React, { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchData();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchData();
    }
  };

  const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/30");
    const response = await data.json();
    setShowShimmer(false);
    setMemes((meme) => [...meme, ...response.memes]);
  };

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, index) => (
        <MemeCard key={index} data={meme} />
      ))}

      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
