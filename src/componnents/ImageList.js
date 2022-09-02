/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ImageList = (props) => {
  const imagesAll = props.images.map((images) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
      <div key={images.id} className="col-lg-4 col-md-4 col-sm-12 mb-3">
        <img
          alt={images.description}
          src={images.urls.regular.toString()}
          className="img-fluid"
        />
      </div>
    );
  });
  return (
    <div>
      <div className="row">{imagesAll}</div>
    </div>
  );
};

export default ImageList;
