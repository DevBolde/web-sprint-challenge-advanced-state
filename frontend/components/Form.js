import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export function Form(props) {
  const { postQuiz, form, inputChange } = props;

  const onChange = (evt) => {
    const { id, value } = evt.target;
    const trimmedValue = value.trim(); // Trim leading and trailing whitespace
    inputChange(id, trimmedValue);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    postQuiz(form.newQuestion, form.newTrueAnswer, form.newFalseAnswer);
  };

  const isFormValid =
    form.newQuestion.length >= 1 &&
    form.newTrueAnswer.length >= 1 &&
    form.newFalseAnswer.length >= 1;

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={form.newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={!isFormValid}>
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((state) => state, actionCreators)(Form);
