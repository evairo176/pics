/* eslint-disable jsx-a11y/alt-text */
import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const imagesAll = props.images.map((image) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imagesAll}</div>;
};

export default ImageList;
