import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ProductBreakdown from './components/ProductBreakdown.jsx'
import IndividualReviewTile from './components/IndividualReviewTile.jsx';


const RatingsAndReviews = ({ currentProduct }) => {
  const [constantReviewArr, setConstantReviewArr ] = useState([]);
  const [productReviewArr, setProductReviewArr] = useState([]);
  const [productMetadataObj, setProductMetadataObj] = useState({});


  // given the id from the current product, make an API GET request
  const getAllReviews = () => {
    axios.get('http://localhost:3000/api/getAllReviews', { params: { 'id': currentProduct.id } })
      .then((results) => {
        // console.log('getAllReviews: ', results.data);
        setProductReviewArr(results.data);
        setConstantReviewArr(results.data)
      })
      .catch((err) => console.log(err));
  };

  //given the id from the current product, make an API GET request to get the review metadata for a given product
  const getProductMetadata = () => {
    axios.get('http://localhost:3000/api/getProductMetadata', { params: { 'id': currentProduct.id } })
      .then((results) => {
        // console.log('getProductMetaData: ', results.data);
        setProductMetadataObj(results.data)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => (currentProduct ? (getAllReviews(), getProductMetadata()) : null), [currentProduct]);

  //methods to change data input
  const filterRatingReviewsDisplay = (ratingNum) => {
    var result = constantReviewArr.filter(reviewObj => (reviewObj.rating === ratingNum))
    setProductReviewArr(result);

  }

  return (
    <div id="RatingsAndReviews">
      <h3>Ratings and Reviews</h3>
      {Object.keys(productMetadataObj).length > 0
        ? 
            <ProductBreakdown 
            productMetadataObj={productMetadataObj}
            filterRatingReviewsDisplay={filterRatingReviewsDisplay}
            />
        : null
      }
      {(productReviewArr.length === constantReviewArr.length )
        ? <button type="button" style={{color: "#a6a6a6"}}>Remove All Filters</button>
        : <button type="button" onClick={() => setProductReviewArr(constantReviewArr)}>Remove All Filters</button>
      }
      {productReviewArr.length > 0 
        ? productReviewArr.map((productReviewObj) => (
          <IndividualReviewTile
            key={productReviewObj.review_id}
            productReviewObj={productReviewObj}
          />
        ))
      : <div>No reviews to display</div>
    }
    </div>
  );
};

export default RatingsAndReviews;
