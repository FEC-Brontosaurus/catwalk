/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import ImageGalleryThumbnailArrows from './ImageGalleryThumbnailArrows';
import noImage from '../../../../../public/static/noimage.jpg';
import '../../styles/ImageGalleryStyles.css';

const ImageGalleryThumbnail = ({
  currentImageIndex, setCurrentImageIndex, LogClick,
  thumbSplitArr, thumbDisplayArr, setThumbDisplayArr, currentStyle,
}) => (
  <div id="imagegallery-thumbnail-container">
    {(thumbSplitArr.length > 1)
      ? (
        <ImageGalleryThumbnailArrows
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          currentStyle={currentStyle}
          thumbSplitArr={thumbSplitArr}
          setThumbDisplayArr={setThumbDisplayArr}
          thumbDisplayArr={thumbDisplayArr}
          LogClick={LogClick}
        />
      )
      : null }
    <div id="imagegallery-thumbnail-slide-container">
      {thumbSplitArr[thumbDisplayArr].map((style, idx) => (
        <React.Fragment key={idx}>
          {(style.thumbnail_url)
            ? (
              <div
                id="imagegallery-thumbnail-slide-image"
                data-testid={`imagegallery-thumbnail-slide-image${idx}`}
                key={idx}
                style={(idx === currentImageIndex) ? { backgroundImage: `url(${style.thumbnail_url})`, opacity: 1 } : { backgroundImage: `url(${style.thumbnail_url})` }}
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(thumbDisplayArr * 7 + idx);
                  LogClick('div', 'Overview');
                }}
              />
            ) : (
              <div
                key={idx}
                id="imagegallery-thumbnail-slide-image"
                data-testid={`imagegallery-thumbnail-slide-noimage${idx}`}
                style={(idx === currentImageIndex) ? { backgroundImage: `url(${noImage})`, opacity: 1 } : { backgroundImage: `url(${noImage})` }}
                alt=""
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(thumbDisplayArr * 7 + idx);
                  LogClick('div', 'Overview');
                }}
              />
            ) }
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default ImageGalleryThumbnail;
