// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import * as types from './action-types';

//Wheel
const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      return (state + 1) % 6;
    case types.MOVE_COUNTERCLOCKWISE:
      return (state + 5) % 6;
    default:
      return state;
  }
}

//Quiz
export const initialQuizState = {
  loading: false,
  quiz_id: "",
  question: "",
  answers: [{
    answer_id: "",
    text: ""
  },
  {
    answer_id: "",
    text: ""
  }]
};
 function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.SET_QUIZ_INTO_STATE:
  return {
    ...state,
    loading: false,
    quiz_id: action.payload.quiz_id,
    question: action.payload.question,
    answers: action.payload.answers
  };
    default:
      return state;
  }
}

//Selected Answer
const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case types.SET_SELECTED_ANSWER:
      return action.payload;
    default:
      return state;
  }
}

//Info Message
const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

//Form
export const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: ''
};

export function form(state = initialFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.id]: action.payload.value
      };
    case types.RESET_FORM:
      return initialFormState;
    default:
      return state;
  }
}



export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
