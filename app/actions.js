'use server'

import axios from 'axios';

export function createPost(formData) {
  const title = formData.get('title');
  const body = formData.get('body');
  const userId = 1; // Hardcoded for this example

  return axios.post('https://jsonplaceholder.typicode.com/posts', {
    title,
    body,
    userId,
  }, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => {
    console.log('Server response:', response.data);
    return response.data;
  })
  .catch(error => {
    console.error('Error creating post:', error);
    throw new Error('Failed to create post');
  });
}
