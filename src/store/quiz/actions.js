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
