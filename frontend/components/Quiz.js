import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, fetchQuiz } from "../state/action-creators";

export default function Quiz(props) {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(state => state.selectedAnswer);
  const quizGrabber = useSelector(state => state.quiz)

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  const handleAnswerClick = (index) => {
    dispatch(selectAnswer(index));
  };
  
  const handleSubmit = (e) => {
    dispatch(fetchQuiz())
  };

  return (
    <div id="wrapper" onSubmit={handleSubmit}>
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{quizGrabber.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${selectedAnswer === 0 ? 'selected' : ''}`} onClick={() => handleAnswerClick(0)}>
              {quizGrabber.answers && quizGrabber.answers[0] && quizGrabber.answers[0].text}
                <button>
                  {selectedAnswer === 0 ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={`answer ${selectedAnswer === 1 ? 'selected' : ''}`} onClick={() => handleAnswerClick(1)}>
              {quizGrabber.answers && quizGrabber.answers[1] && quizGrabber.answers[1].text}
                <button>
                  {selectedAnswer === 1 ? "SELECTED" : "Select"}
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
