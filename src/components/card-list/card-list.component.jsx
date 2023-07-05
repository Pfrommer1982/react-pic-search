import React, { useState, useEffect } from "react";
import Card from "../card/card.component";

const CardList = ({ searchField }) => {
  const [filteredPictures, setFilteredPictures] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        let url = `https://api.unsplash.com/photos/random?count=24&page=`;
        if (searchField) {
          url += `&query=${searchField}`;
        }
        const response = await fetch(url, {
          headers: {
            Authorization: `Client-ID 5FPz0FvSfAyz3y3R1UWisB8cg9qkRcF5z8yHXFU0dkI `,
          },
        });
        const data = await response.json();
        setFilteredPictures(data);
      } catch (error) {
        console.error("Error fetching photos from Unsplash API:", error);
      }
    };

    fetchPictures();
  }, [searchField]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
      {filteredPictures.map((picture) => (
        <Card key={picture.id} photo={picture} />
      ))}
    </div>
  );
};

export default CardList;