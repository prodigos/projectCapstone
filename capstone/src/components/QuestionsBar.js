import React from 'react';
// import QuestionCategory from '../components/QuestionCategories'

const QuestionsBar = ({categoryHandler}) => {

    return (
        <div>
            <h1>{categoryHandler()}</h1>
        </div>
    )
}

export default QuestionsBar;