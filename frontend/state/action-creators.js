// ❗ You don't need to add extra action creators to achieve MVP
import * as types from "./action-types"
import axios from 'axios';


export function moveClockwise() {
  return { type: types.MOVE_CLOCKWISE };
}

export function moveCounterClockwise() {
  return { type: types.MOVE_COUNTERCLOCKWISE };
}

export function selectAnswer(index) {
  return { type: types.SET_SELECTED_ANSWER, payload: index }
 }

export function setMessage(message) {
  return{ type: types.SET_INFO_MESSAGE, payload: message }
 }

export function setQuiz(quiz) {
  return {type: types.SET_QUIZ_INTO_STATE, payload: quiz};
}
export function inputChange(id, value) {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      id,
      value
    }
  };
}
export function resetForm() { 
  return {type: types.RESET_FORM}
}
export function setQuizLoading (loading) {
  return {type: types.SET_QUIZ_LOADING, payload: loading}
}

// ❗ Async action creators
export const fetchQuiz = () => {
  return (dispatch) => {
    dispatch(setQuizLoading(true)); // Set loading state to true
    
    return new Promise((resolve, reject) => {
      fetch('http://localhost:9000/api/quiz/next')
        .then(response => response.json())
        .then(data => {
          dispatch(setQuiz(data));
          resolve();
        })
        .catch(err => {
          console.error("fetchQuiz Error/", err.response.data.message);
          reject(err);
        })
        .finally(() => {
          dispatch(setQuizLoading(false)); // Reset loading state after fetch completes
        });
    });
  };
};

export function postAnswer(quizId, answerId) {
  return function (dispatch) {
    const payload = {
      quiz_id: quizId,
      answer_id: answerId
    };

    axios
      .post("http://localhost:9000/api/quiz/answer", payload)
      .then(res => {
        // On successful POST:
        // - Dispatch an action to reset the selected answer state
        // - Dispatch an action to set the server message to state
        // - Dispatch the fetching of the next quiz
        dispatch(selectAnswer(null)); // Reset selected answer
        dispatch(setMessage(res.data.message)); // Set server message
        dispatch(fetchQuiz()); // Fetch next quiz
      })
      .catch(err => {
        // On error:
        // - Dispatch an action to set the error message to state
        dispatch(setMessage(err.response.data.message)); // Set error message
      });
  };
}

  export function postQuiz(newQuestion, newTrueAnswer, newFalseAnswer) {
  return function (dispatch) {
    // Create the payload for the POST request
    const payload = {
      question_text: newQuestion,
      true_answer_text: newTrueAnswer,
      false_answer_text: newFalseAnswer
    };

    // Make the POST request to submit the new quiz
    axios
      .post("http://localhost:9000/api/quiz/new", payload)
      .then((res) => {
        // On successful POST:
        // - Dispatch the submit form success action
        console.log(res)
        dispatch(setMessage(`Congrats: "${res.data.question}" is a great question!`));
        dispatch(resetForm());
      })
      .catch((err) => {
        // On error:
        // - Dispatch the submit form failure action with the error message
        dispatch(setMessage(err.response.data.message));
      });
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

