/**
 * Fetch posts from JSONPlaceholder.
 * @returns {Promise<Array>} List of posts
 * @throws {Error} If the fetch fails
 */
export async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return await response.json();
}