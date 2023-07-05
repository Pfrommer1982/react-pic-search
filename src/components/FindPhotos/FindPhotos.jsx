import React, { useState } from 'react';
import { createApi } from 'unsplash-js';
import './FindPhotos.css';

const unsplash = createApi({
  accessKey: `Client-ID 5FPz0FvSfAyz3y3R1UWisB8cg9qkRcF5z8yHXFU0dkI`,
});

const FindPhotos = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search.getPhotos({ query }).then((result) => {
      if (result.errors) {
        console.error(result.errors);
      } else {
        onSearch(query);
      }
    });
  };

  return (
    <form className="max-w-sm mx-auto mt-4" onSubmit={searchPhotos}>
      <div className="searchbar flex items-center border-b border-b-2 border-gray-500 py-2">
        <input
          type="text"
          name="query"
          className="appearance-none text-center bg-transparent border-none flex-grow text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Search anything here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-8 text-white py-1 px-2 rounded focus:outline-none"
        >
          GO!
        </button>
      </div>
    </form>
  );
  
};

export default FindPhotos;
