import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Answers = ({ answers, loadFlag }) => {
  const [initialAnswers, setInitAnswers] = useState([]);
  // const getInitialAnswers = (questionId) => {
  //   axios.get(`/api/qa/questions/${questionId}/answers`)
  //     .then((result) => {
  //       setInitAnswers(result.data.results);
  //       console.log(result.data.results);
  //     })
  //     .catch((err) => { console.log('error in answers get req', err); });
  // };

  // useEffect(() => (questId ? getInitialAnswers(questId) : null), [questId]);

  const sortAnswers = (unsortedAnswers) => {
    const tempArr = [];
    Object.entries(unsortedAnswers).forEach(([key, value]) => {
      const obj = {};
      obj.answer_id = key;
      obj.body = value.body;
      obj.date = value.date;
      obj.answerer_name = value.answerer_name;
      obj.helpfulness = value.helpfulness;
      tempArr.push(obj);
    });
    return tempArr.sort((a, b) => b.helpfulness - a.helpfulness);
  };

  const displayAnswers = (sortedArr) => {
    const tempArr = [];
    for (let i = 0; i < 2; i += 1) {
      tempArr.push(sortedArr[i]);
    }
    return tempArr;
  };
  const smallDisplay = displayAnswers(sortAnswers(answers));

  useEffect(() => (loadFlag ? setInitAnswers(sortAnswers(answers))
    : setInitAnswers(smallDisplay)), [loadFlag]);

  return (
    <div>
      {answers
      && initialAnswers.map((answer) => (
        <div className="QandA-Answer" key={answer.answer_id.toString()}>
          A:
          {answer.body}
          <span className="username-timestamp">
            {answer.answerer_name}
          </span>
          <span className="helpful-yes">
            Helpful?
            <span href="#"> yes </span>
            <span className="report-answer"> Report </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Answers;
