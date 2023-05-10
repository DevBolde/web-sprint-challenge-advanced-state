import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../state/action-creators";

 function Quiz(props) {
  const {quiz, selectedAnswer, selectAnswer, fetchQuiz, postAnswer} = props

  useEffect(() => {
    if (!quiz.quiz_id) {
      fetchQuiz();
    }
  }, [fetchQuiz]);
  

  // Refactoring Functions
  const answerID = (i) =>{
    return quiz.answers[i].answerId
  }
  const answerText = (i) => {
    return quiz.answers[i].text
  }
 

  // Methods
  const handleAnswerClick = (index) => {
    selectAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      const answerId = quiz.answers[selectedAnswer].answer_id;
      postAnswer(quiz.quiz_id, answerId);
    }
  };
  
  return (
    <div id="wrapper" >
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz.loading ? (
          'Loading next quiz...'
        ):(
          <>
            <h2 key={quiz.quiz_id}>{quiz.question}</h2>
          
            <div id="quizAnswers">
              <div key={answerID(0)} className={`answer ${selectedAnswer === 0 ? 'selected' : ''}`} onClick={() => handleAnswerClick(0)}>
                 {answerText(0)}                
                <button>{selectedAnswer === 0 ? "SELECTED" : "Select"}</button>
              </div>

              <div key={answerID(1)} className={`answer ${selectedAnswer === 1 ? 'selected' : ''}`} onClick={() => handleAnswerClick(1)}>
                  {answerText(1)}               
                <button>{selectedAnswer === 1 ? "SELECTED" : "Select"}</button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={() =>handleSubmit(selectedAnswer)} disabled={selectedAnswer === null}>Submit answer</button>
          </>
        ) }
    </div>
  );
}
const mapStateToProps = (state) => {
  // Map the required state properties to props
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  };
};
export default connect(mapStateToProps, actionCreators)(Quiz);