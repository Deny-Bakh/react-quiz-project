import * as types from './constants';

export const fetchQuizSuccess = (questions) => ({
  type: types.FETCH_QUIZ_SUCCESS,
  payload: questions,
});

export const fetchQuizFailure = (error) => ({
  type: types.FETCH_QUIZ_FAILURE,
  payload: error,
});

export const updateCurrentQuestion = (index) => ({
  type: types.UPDATE_CURRENT_QUESTION,
  payload: index,
});

export const updateCorrectAnswers = (count) => ({
  type: types.UPDATE_CORRECT_ANSWERS,
  payload: count,
});

export const updateTimeLeft = (time) => ({
  type: types.UPDATE_TIME_LEFT,
  payload: time,
});

export const resetQuizState = () => ({
  type: types.RESET_STATE,
});

export const quizActions = {
  fetchQuizSuccess,
  fetchQuizFailure,
  updateCurrentQuestion,
  updateCorrectAnswers,
  updateTimeLeft,
  resetQuizState,
};

// import { createAction } from '@reduxjs/toolkit';
// import { CHOSEN_QUIZ } from './constants';
// import * as types from './constants';

// const getAction = createAction(`${CHOSEN_QUIZ}/getQuiz`, (payload) => ({ payload }));
// export {
//   getAction,
// };

// export const fetchQuizSuccess = (questions) => ({
//   type: types.FETCH_QUIZ_SUCCESS,
//   payload: questions,
// });

// export const fetchQuizFailure = (error) => ({
//   type: types.FETCH_QUIZ_FAILURE,
//   payload: error,
// });

// export const updateCurrentQuestion = (index) => ({
//   type: types.UPDATE_CURRENT_QUESTION,
//   payload: index,
// });

// export const updateCorrectAnswers = (count) => ({
//   type: types.UPDATE_CORRECT_ANSWERS,
//   payload: count,
// });

// export const updateTimeLeft = (time) => ({
//   type: types.UPDATE_TIME_LEFT,
//   payload: time,
// });

// export const resetQuizState = () => ({
//   type: types.RESET_STATE,
// });

// export const quizActions = {
//   fetchQuizSuccess,
//   fetchQuizFailure,
//   updateCurrentQuestion,
//   updateCorrectAnswers,
//   updateTimeLeft,
//   resetQuizState,
//   createAction,
// };
