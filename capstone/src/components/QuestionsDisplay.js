import React from "react";



const QuestionsDisplay = () => {

  let query = async (arr) => {
    let res = [];
    questions.map((question) => {
      res = question.category
      return <div>{res}</div>
      
    });
  };

  return (
    <div>
      <h1>display questions here</h1>
      <p>{query}</p>
    </div>
  );
};

export default QuestionsDisplay;
