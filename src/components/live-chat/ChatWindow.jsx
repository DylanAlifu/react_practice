import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { DATA, generate, generateImage } from "../../constants/LiveChatData";

const ChatWindow = () => {
  const [comments, setComments] = useState([]);

  // Randomly select a comment from the DATA array
  const getRandomComment = () => {
    const randomIndex = Math.floor(Math.random() * DATA.length);
    return DATA[randomIndex];
  };

  const fetchData = () => {
    const newComment = {
      ...getRandomComment(), // Get a random comment
      username: generate(), // Generate a random username
      img: generateImage(), // Generate a random image
    };

    setComments((prevComments) => {
      const updatedComments = [newComment, ...prevComments]; // Add the new comment to the start

      // If there are more than 50 comments, remove the oldest one (last in the array)
      if (updatedComments.length > 50) {
        return updatedComments.slice(0, 50); // Keep only the first 50 comments
      }

      return updatedComments;
    });
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 1000); // Add a new message every second
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="w-full h-[600px] border border-slate-400 m-5 shadow-lg rounded-md bg-gray-100 overflow-y-scroll p-4 flex flex-col-reverse">
      {comments.map((comment, index) => (
        <ChatMessage key={index} {...comment} />
      ))}
    </div>
  );
};

export default ChatWindow;
