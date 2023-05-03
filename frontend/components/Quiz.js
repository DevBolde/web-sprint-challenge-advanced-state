import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer } from "../state/action-creators";

export default function Quiz(props) {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(state => state.selectedAnswer);

  const handleAnswerClick = (index) => {
    dispatch(selectAnswer(index));
  };
  
  const handleSubmit = () => {
    // handle submit logic
  };

  return (
    <div id="wrapper" onSubmit={handleSubmit}>
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className={`answer ${selectedAnswer === 0 ? 'selected' : ''}`} onClick={() => handleAnswerClick(0)}>
                A function
                <button>
                  {selectedAnswer === 0 ? "Selected" : "Select"}
                </button>
              </div>

              <div className={`answer ${selectedAnswer === 1 ? 'selected' : ''}`} onClick={() => handleAnswerClick(1)}>
                An elephant
                <button>
                  {selectedAnswer === 1 ? "Selected" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  );
}
