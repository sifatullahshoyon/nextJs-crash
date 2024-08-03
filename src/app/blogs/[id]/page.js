import { notFound } from "next/navigation";
import React from "react";

const singleBlogPage = ({ params }) => {
  const { id, title, body } = params;

  if (id === "6") {
    notFound();
  }

  return (
    <div className="border bg-[tomato] text-black p-2">
      <h6>Id : {id}</h6>
      <h4 className="my-5">Title: {title}</h4>
      <p>Details: {body}</p>
    </div>
  );
};

export default singleBlogPage;
