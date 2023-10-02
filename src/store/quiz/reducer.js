/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import actions from '../quizes/actions';
import * as types from './constants';

const initialState = {
  questions: [],
  error: '',
  currentQuestionIndex: 0,
  correctAnswers: 0,
  timeLeft: types.DEFAULT_QUIZ_DURATION,
  quizStartTime: null,
  isLoadingQuestions: true,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(types.FETCH_QUIZ_SUCCESS, (state, action) => {
        state.questions = action.payload.questions;
        state.quizStartTime = action.payload.quizStartTime;
        state.isLoadingQuestions = false;
      })
      .addCase(types.FETCH_QUIZ_FAILURE, (state, action) => {
        state.error = action.payload;
        state.isLoadingQuestions = false;
      })
      .addCase(types.UPDATE_CURRENT_QUESTION, (state, action) => {
        state.currentQuestionIndex = action.payload;
      })
      .addCase(types.UPDATE_CORRECT_ANSWERS, (state, action) => {
        state.correctAnswers = action.payload;
      })
      .addCase(types.UPDATE_TIME_LEFT, (state, action) => {
        state.timeLeft = action.payload;
      })
      .addCase(actions.getAction, (state, { payload }) => {
        state.quizApi = payload;
      })
      .addCase(types.RESET_STATE, () => initialState);
  },
});

export const { reducer: quizReducer } = quizSlice;
