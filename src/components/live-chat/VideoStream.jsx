import React from "react";

const VideoStream = () => {
  return (
    <div>
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/4xDzrJKXOOY?si=Wnk9ShqnhkiGppn3"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="m-5 rounded-md shadow-xl"
      ></iframe>
    </div>
  );
};

export default VideoStream;
