/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndividualReviewTile from './components/IndividualReviewTile.jsx';
import styles from './styles/RatingsAndReviews.css'; 

const RatingsAndReviews = ({ currentProduct }) => {
  const [productReviewArr, setProductReviewArr] = useState([]);

  // given the id from the current product, make an API GET request
  const getAllReviews = () => {
    // console.log('currentProduct id: ', currentProduct.id);
    // eslint-disable-next-line object-curly-spacing
    // eslint-disable-next-line quote-props
    axios.get('http://localhost:3000/api/getAllReviews', { params: { 'id': currentProduct.id } })
      .then((results) => {
        // console.log('results on client side: ', results.data);
        setProductReviewArr(results.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => (currentProduct ? getAllReviews() : null), [currentProduct]);

  return (
    <div id="RatingsAndReviews">
      <h3>Ratings and Reviews</h3>
      {productReviewArr.map((productReviewObj) => (
        <IndividualReviewTile
          key={productReviewObj.review_id}
          productReviewObj={productReviewObj}
        />
      ))}
    </div>
  );
};

export default RatingsAndReviews;
