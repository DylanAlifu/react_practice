import React from "react";

const ChatMessage = ({ username, comment, img }) => {
  return (
    <div className="flex items-start gap-4 mb-4">
      <img src={img} alt={username} className="rounded-full w-12 h-12" />
      <div className="bg-white p-3 rounded-lg shadow-md max-w-lg">
        <span className="block font-bold text-md mb-1">{username}</span>
        <span className="block text-gray-700">{comment}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
