'use server'

export async function createPost(formData) {
  const title = formData.get('title');
  const body = formData.get('body');
  const userId = 1; // Hardcoded for this example

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  // console.log(response.json())
  return await response.json();
}
