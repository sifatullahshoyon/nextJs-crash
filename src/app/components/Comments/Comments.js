import React from "react";

const Comments = async ({ Promise }) => {
  const comments = await Promise;
  return (
    <div className="my-10">
      <h1 className="text-[tomato] mb-5">Comment</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
