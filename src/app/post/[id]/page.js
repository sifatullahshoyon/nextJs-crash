import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import { Suspense } from "react";
import Comments from "../../components/Comments/Comments";

export async function generateMetadata({ params }) {
  const { id } = params;
  const singlePost = await getPost(id);
  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

const singlePost = async ({ params }) => {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post , comments] = await Promise.all([postPromise , commentsPromise]);

  const post = await postPromise;

  return (
    <div className="border p-2">
      <h1>{id}</h1>
      <h3 className="my-4 text-green-500">{post.title}</h3>
      <p className="mb-4">{post.body}</p>

      <hr />

      {/* <div className='my-10'>
                <h1 className='text-[tomato] mb-5'>Comment</h1>
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>{comment.body}</li>
                    ) )}
                </ul>
            </div> */}

      <Suspense fallback="<h1>Loading comments....</h1>">
        <Comments Promise={commentsPromise} />
      </Suspense>
    </div>
  );
};

export default singlePost;
