import React from "react";

function Comment({
  comment,
}: {
  comment: {
    id: number;
    name: string;
    image: string;
    text: string;
    review: number;
  };
}) {
  return (
    <div
      style={{
        height: 120,
        width: "100%",
        display: "flex",
        border: "1px solid black",
      }}
    >
      <div style={{ borderRadius: 100 }}>
        <img width={120} height={120} src={comment.image} />
      </div>
      <div>
        <p>{comment.name}</p>
      </div>
      <div>
        <p>{comment.text}</p>
      </div>
    </div>
  );
}

export default Comment;
