import React from "react";

const CommentBox = ({ data }) => {
  return (
    <div>
      {data.map((comm, index) => (
        <>
          <div className="flex gap-4 items-center ml-2 p-5 border-l-2 border-slate-300 rounded-sm shadow-md border-r-0" key={index}>
            <div>
              <img src={comm.img} alt="profile" className="w-16 rounded-full" />
            </div>
            <div>
              <h4 className="font-bold">{comm.username}</h4>
              <p className="p-2">{comm.comment}</p>
            </div>
          </div>
          <div className="ml-24">{comm.replies && <CommentBox data={comm.replies} />}</div>
        </>
      ))}
    </div>
  );
};

export default CommentBox;
