export default async function getPost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!result.ok) {
    throw new Error("There was an error fetching the Single Post");
  }

  return await result.json();
}
