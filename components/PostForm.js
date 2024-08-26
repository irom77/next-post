'use client'

import { useState } from 'react';
import { createPost } from '../app/actions';

export default function PostForm() {
  const [message, setMessage] = useState('');

  async function handleSubmit(formData) {
    try {
      const result = await createPost(formData);
      setMessage(`Post created successfully with ID: ${result.id}`);
    } catch (error) {
      setMessage('Failed to create post. Please try again.');
    }
  }

  return (
    <form action={handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Post
        </button>
      </div>
      {message && (
        <p className="mt-4 text-sm text-gray-600">{message}</p>
      )}
    </form>
  );
}
