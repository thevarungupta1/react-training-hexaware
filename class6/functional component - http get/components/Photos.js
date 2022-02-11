import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
    console.log(response.data);
    setPhotos(response.data);
  }, []);

  return (
    <div>
      <h1>All Photos</h1>
      <div className="row">
        {
            photos.map(photo => <Photo data={ photo } />)
        }
      </div>
    </div>
  );
};
export default Photos;