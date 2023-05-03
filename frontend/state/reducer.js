// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE,SET_QUIZ_INTO_STATE,SET_SELECTED_ANSWER } from './action-types';
//Wheel
const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return (state + 1) % 6;
    case MOVE_COUNTERCLOCKWISE:
      return (state + 5) % 6;
    default:
      return state;
  }
}

//Quiz
const initialQuizState = {
  quiz_id: "", 
  question: "",
  answers: [
    {
      answer_id: "",
      text: ""
    },
    {
      answer_id: "",
      text: ""
    }
  ]
};
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return {
        quiz_id: state.quiz_id,
        question: action.payload.question_text,
        answers: [
          {
            answer_id: "",
            text: action.payload.true_answer_text,
          },
          {
            answer_id: "",
            text: action.payload.false_answer_text,
          },
        ],
      };
    default:
      return state;
  }
}


const initialSelectedAnswerState = -1;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return action.payload;
    default:
      return state;
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
