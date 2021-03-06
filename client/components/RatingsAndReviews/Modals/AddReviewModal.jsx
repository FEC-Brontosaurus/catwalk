import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from '../styles/RatingsAndReviewsStyles.css';


const AddReviewModal = ({currentProduct_id}) => {
    const [currentStarRatingText, setCurrentStarRatingText]= useState(null);
    const [reviewBody, setReviewBody] = useState('');
    const reviewModalRef = useRef(null);

    //modal functions
    const openReviewModal = (modal) => {
        modal.current.focus();
        modal.current.style.display = "block";
    }

    const closeReviewModal = (modal) => {
        modal.current.focus();
        modal.current.style.display = "none";
    }

    //reformatting functions
    const returnStarRatingText = (value) => {
        const starRatingTextObj = {
            5: 'Great',
            4: 'Good',
            3: 'Average', 
            2: 'Fair', 
            1: 'Poor'
        };
        setCurrentStarRatingText(starRatingTextObj[value]);
    }

    const reviewBodyCharCount = (num) => {
      var returnStatment = '';
      if (num < 50) {
        returnStatment = `Minimum required characters left: ${50 - num}`;
      } else {
        returnStatment = 'Minimum reached';
      }
      return returnStatment;
    }

    //submit review 
    const submitReview = (product_id, rating, summary, body, recommend, name, email, photos, characteristics) => {
      console.log(product_id);
      // const { product_id, rating, summary, body, recommend, name, email, photos, characteristics} = req.body;
      // axios.post('http://localhost:3000/api/reviews', { product_id, rating, summary, body, recommend, name, email, photos, characteristics })
      //   .catch((err) => console.log(err));

    }

    return (
      <div>
        {/* {console.log(currentProduct_id)} */}
        <button type="button "id="myBtn" onClick={() => openReviewModal(reviewModalRef)}>Add Review</button>
        <div ref={reviewModalRef} id="myModal" className="modal">
            <div className="modal-content">            
            <span className="close" onClick={() => closeReviewModal(reviewModalRef)}>&times;</span>
            <h2>Add Review</h2> 
            <h3>Overall Rating</h3>
            <div className="txt-center">
                <form>
                    <div className="rating"> 
                        <input id="star5" name="star" type="radio" value="5" className="radio-btn hide" />
                        <label htmlFor="star5" onMouseOver={() => returnStarRatingText(5)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star4" name="star" type="radio" value="4" className="radio-btn hide" />
                        <label htmlFor="star4" onMouseOver={() => returnStarRatingText(4)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star3" name="star" type="radio" value="3" className="radio-btn hide" />
                        <label htmlFor="star3" onMouseOver={() => returnStarRatingText(3)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star2" name="star" type="radio" value="2" className="radio-btn hide" />
                        <label htmlFor="star2" onMouseOver={() => returnStarRatingText(2)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <input id="star1" name="star" type="radio" value="1" className="radio-btn hide" />
                        <label htmlFor="star1" onMouseOver={() => returnStarRatingText(1)} onMouseOut={() => setCurrentStarRatingText(null)}>☆</label>
                        <div className="clear"></div>
                    </div>
                </form>
            </div>
            <div>{currentStarRatingText}</div>
            <h3>Do you recommend this product?</h3>
            <form>
              <input id="recommend-yes" name="recommend" type="radio" value="Yes" className="radio-btn recommend"/>
              <label htmlFor="recommend-yes">Yes</label>
              <input id="recommend-no" name="recommend" type="radio" value="No" className="radio-btn recommend"/>
              <label htmlFor="recommend-no">No</label>
            </form>
            <h3>Characteristic Review</h3>
            <h4>Size</h4>
            <form>
              <input id="characteristics-review-size1" name="size" type="radio" value="1" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-size1">A size too small</label>
              <input id="characteristics-review-size2" name="size" type="radio" value="2" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-size2">Half size too small</label>
              <input id="characteristics-review-size3" name="size" type="radio" value="3" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-size3">Perfect</label>
              <input id="characteristics-review-size4" name="size" type="radio" value="4" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-size4">Half size too big</label>
              <input id="characteristics-review-size5" name="size" type="radio" value="5" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-size5">A size too wide</label>
            </form>
            <h4>Width</h4>
            <form>
              <input id="characteristics-review-width1" name="width" type="radio" value="1" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-width1">Too narrow</label>
              <input id="characteristics-review-width2" name="width" type="radio" value="2" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-width2">Slightly narrow</label>
              <input id="characteristics-review-width3" name="width" type="radio" value="3" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-width3">Perfect</label>
              <input id="characteristics-review-width4" name="width" type="radio" value="4" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-width4">Slightly wide</label>
              <input id="characteristics-review-width5" name="width" type="radio" value="5" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-width5">Too wide</label>
            </form>
            <h4>Comfort</h4>
            <form>
              <input id="characteristics-review-comfort1" name="comfort" type="radio" value="1" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-comfort1">Uncomfortable</label>
              <input id="characteristics-review-comfort2" name="comfort" type="radio" value="2" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-comfort2">Slightly Uncomfortable</label>
              <input id="characteristics-review-comfort3" name="comfort" type="radio" value="3" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-comfort3">Okay</label>
              <input id="characteristics-review-comfort4" name="comfort" type="radio" value="4" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-comfort4">Comfortable</label>
              <input id="characteristics-review-comfort5" name="comfort" type="radio" value="5" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-comfort5">Perfect</label>
            </form>
            <h4>Quality</h4>
            <form>
              <input id="characteristics-review-quality1" name="quality" type="radio" value="1" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-quality1">Poor</label>
              <input id="characteristics-review-quality2" name="quality" type="radio" value="2" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-quality2">Below average</label>
              <input id="characteristics-review-quality3" name="quality" type="radio" value="3" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-quality3">What I expected</label>
              <input id="characteristics-review-quality4" name="quality" type="radio" value="4" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-quality4">Pretty great</label>
              <input id="characteristics-review-quality5" name="quality" type="radio" value="5" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-quality5">Perfect</label>
            </form>
            <h4>Length</h4>
            <form>
              <input id="characteristics-review-length1" name="length" type="radio" value="1" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-length1">Runs short</label>
              <input id="characteristics-review-length2" name="length" type="radio" value="2" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-length2">Runs slightly short</label>
              <input id="characteristics-review-length3" name="length" type="radio" value="3" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-length3">Perfect</label>
              <input id="characteristics-review-length4" name="length" type="radio" value="4" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-length4">Runs slightly long</label>
              <input id="characteristics-review-length5" name="length" type="radio" value="5" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-length5">Runs long</label>
            </form>
            <h4>Fit</h4>
            <form>
              <input id="characteristics-review-fit1" name="fit" type="radio" value="1" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-fit1">Runs tight</label>
              <input id="characteristics-review-fit2" name="fit" type="radio" value="2" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-fit2">Runs slightly tight</label>
              <input id="characteristics-review-fit3" name="fit" type="radio" value="3" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-fit3">Perfect</label>
              <input id="characteristics-review-fit4" name="fit" type="radio" value="4" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-fit4">Runs slightly big</label>
              <input id="characteristics-review-fit5" name="fit" type="radio" value="5" className="radio-btn charactertics"/>
              <label htmlFor="characteristics-review-fit5">Runs big</label>
            </form>
            <h3>Review Summary</h3>
            <form>
              <input type="text" id="review-summary-user" size="70" maxLength="60" placeholder="Example: Best purchase ever!"></input>
            </form>
            <h3>Review Body</h3>
              <input type="text" id="review-body-user" size="70" maxLength="1000" placeholder="Why did you like this product or not?" value={reviewBody} onChange={(event) => {setReviewBody(event.target.value)}}></input>
              <div>{reviewBodyCharCount(reviewBody.length)}</div>
            <h3>What is your nickname?</h3>
              <input type="text" id="review-body-nickname" size="70" maxLength="60" placeholder="Example: jackson11!" /*value={reviewBody} onChange={(event) => {setReviewBody(event.target.value)}}*/></input>
              <div>For privacy reasons, do not use your full name or email address</div>
            <h3>What is your email?</h3>
              <input type="text" id="review-body-email" size="70" maxLength="60" placeholder="Example: jackson11@email.com" /*value={reviewBody} onChange={(event) => {setReviewBody(event.target.value)}}*/></input>
              <div>For authentication reasons, you will not be emailed</div><br></br>
            <button
              type="button"
              //product_id, rating, summary, body, recommend, name, email, photos, characteristics
              onClick={() => submitReview(currentProduct_id)}
            >Submit Review</button>
          </div>
        </div>
      </div>
    )
}

export default AddReviewModal;