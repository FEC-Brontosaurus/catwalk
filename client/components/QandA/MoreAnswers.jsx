import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/AnswerStyles.css';
import TimeAgo from 'react-timeago';
import AnswerHelpClick from './AnswerHelpClick';
import AnswerReport from './AnswerReport';
import axios from 'axios';
import _, { unescape } from 'underscore';

const MoreAnswers = ({ questId, logClick, reRender, render }) => {
  const [initialAnswers, setInitAnswers] = useState([]);
  const helpClick = useRef(0);
  const getInitialAnswers = (questionId) => {
    axios.get(`/api/moreAnswers/${questionId}`)
      .then((result) => {
        sortAnswers(result.data.results);
      })
      .catch((err) => { console.log('error in answers get req', err); });
  };

  useEffect(() => (questId ? getInitialAnswers(questId) : null), [questId]);

  const sortAnswers = (unsortedAnswers) => {
    const tempArr = [];
    Object.entries(unsortedAnswers).forEach(([key, value]) => {
      const obj = {};
      obj.answer_id = key;
      obj.body = value.body;
      obj.date = value.date;
      obj.answerer_name = value.answerer_name;
      obj.helpfulness = value.helpfulness;
      obj.photos = value.photos;
      tempArr.push(obj);
    });
    const sellers = tempArr.filter((answer) => {
     return answer.answerer_name === 'Seller';
    })
    const buyers = tempArr.filter((answer) => {
     return answer.answerer_name.toLowerCase() !== 'seller';
    })
    const helpSort = buyers.sort((a, b) => b.helpfulness - a.helpfulness);
    setInitAnswers(sellers.concat(buyers));
  };

  return (
    <>
      {initialAnswers
      ? initialAnswers.map((answer, index) => (
        answer ? <div>
          <div className="QandA-Answer" key={answer.answer_id.toString() + index}>
            A:
            {_.unescape(answer.body)}
            <span className="helpful-yes">
              Helpful?
              <span> <AnswerHelpClick reRender={reRender} render={render} logClick={logClick} ansId={answer.answer_id}/> </span>
              <><AnswerReport reRender={reRender} render={render} logClick={logClick} ansId={answer.answer_id}/></>
            </span>
          </div>
          <div>
            {answer.photos.length > 0 ? answer.photos.map((photo) => (<>{typeof photo === 'string' ? <img key={photo} className="answer-image" src={photo}/> : null }</>)) : null }
          </div>
          <div className="username-timestamp"> by {answer.answerer_name}, <TimeAgo date={answer.date} /> </div>
        </div>
        : null )
      )
    : null }
    </>
  );
};

export default MoreAnswers;