// import { createAction } from '@reduxjs/toolkit';

// export const setCurrentQuestionIndex = createAction('quiz/setCurrentQuestionIndex');
// export const setCorrectAnswers = createAction('quiz/setCorrectAnswers');
// export const setTimeLeft = createAction('quiz/setTimeLeft');
// export const setQuizStartTime = createAction('quiz/setQuizStartTime');
// export const setError = createAction('quiz/setError');

// import { createAction } from '@reduxjs/toolkit';
// import * as constants from './constants';

// export const setCurrentQuestionIndex = createAction(constants.SET_CURRENT_QUESTION_INDEX);
// export const setCorrectAnswers = createAction(constants.SET_CORRECT_ANSWERS);
// export const setTimeLeft = createAction(constants.SET_TIME_LEFT);
// export const setQuizStartTime = createAction(constants.SET_QUIZ_START_TIME);
// export const setError = createAction(constants.SET_ERROR);
// export const setIsLoadingQuestions = createAction(constants.SET_IS_LOADING_QUESTIONS);

// actions.js
// import { createAction } from '@reduxjs/toolkit';
// import * as constants from './constants'; // Import your action constants

// export const setQuestions = createAction(constants.SET_QUESTIONS);
// export const setError = createAction(constants.SET_ERROR);
// export const setCurrentQuestionIndex = createAction(constants.SET_CURRENT_QUESTION_INDEX);
// export const setCorrectAnswers = createAction(constants.SET_CORRECT_ANSWERS);
// export const setTimeLeft = createAction(constants.SET_TIME_LEFT);
// export const setQuizStartTime = createAction(constants.SET_QUIZ_START_TIME);
// export const setIsLoadingQuestions = createAction(constants.SET_IS_LOADING_QUESTIONS);

// constants.js

// actions.js

// import * as constants from './constants';

// export const fetchQuizRequest = () => ({
//   type: constants.FETCH_QUIZ_REQUEST,
// });

// export const fetchQuizSuccess = (questions) => ({
//   type: constants.FETCH_QUIZ_SUCCESS,
//   payload: questions,
// });

// export const fetchQuizFailure = (error) => ({
//   type: constants.FETCH_QUIZ_FAILURE,
//   payload: error,
// });

// export const answerQuestion = (selectedAnswer) => ({
//   type: constants.ANSWER_QUESTION,
//   payload: selectedAnswer,
// });

// export const setTimer = (timeLeft) => ({
//   type: constants.SET_TIMER,
//   payload: timeLeft,
// });

// export const resetQuiz = () => ({
//   type: constants.RESET_QUIZ,
// });

// quiz/actions.js

// src/store/quiz/actions.js

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
