import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

const post = async () => {
  const posts = await getAllPosts();
  return (
    <div>
      <h1 className="my-10 text-green-500 text-2xl text-center">All Post</h1>

      <div className="mb-10">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default post;

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toSting(),
  }));
}
