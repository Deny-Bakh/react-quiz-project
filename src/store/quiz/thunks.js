// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { QUIZ_API_BASE_URL } from './constants';
// import * as actions from './actions';

// export const fetchChosenQuiz = createAsyncThunk(
//   'quiz/fetchChosenQuiz',
//   async (quizName, { dispatch }) => {
//     try {
//       const response = await fetch(`${QUIZ_API_BASE_URL}/${quizName}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch questions.');
//       }
//       const data = await response.json();

//       const filteredQuestions = data.filter((question) => question.chozenQuiz === quizName);

//       dispatch(actions.setQuestions(filteredQuestions));
//       dispatch(actions.setQuizStartTime(Date.now()));
//     } catch (err) {
//       console.error(err);
//       dispatch(actions.setError(err.message || 'An error occurred while fetching questions.'));
//     }
//   }
// );

// quizThunks.js
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { quizApi } from '../../api/quizApi/quizApi';
// import {
//   setQuestions,
//   setError,
//   setCurrentQuestionIndex,
//   setCorrectAnswers,
// } from './quizDataSlice';

// export const fetchChosenQuiz = createAsyncThunk(
//   'quiz/fetchChosenQuiz',
//   async (quizName, { dispatch }) => {
//     try {
//       const response = await quizApi.get(quizName);

//       const filteredQuestions = response.filter(
//         (question) => question.chozenQuiz === quizName
//       );

//       dispatch(setQuestions(filteredQuestions));
//       dispatch(setCurrentQuestionIndex(0));
//       dispatch(setCorrectAnswers(0));
//     } catch (err) {
//       console.error(err);
//       dispatch(
//         setError(err.message || 'An error occurred while fetching questions.')
//       );
//     }
//   }
// );

// fetchChosenQuiz.js
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { quizApi } from '../../api/quizApi/quizApi';
// import rootReducer, { setQuestions, setError, setCurrentQuestionIndex, setCorrectAnswers } from '../reducer';

// export const fetchChosenQuiz = createAsyncThunk(
//   'quiz/fetchChosenQuiz',
//   async (quizName, { dispatch }) => {
//     try {
//       const response = await quizApi.get(quizName);

//       const filteredQuestions = response.filter(
//         (question) => question.chozenQuiz === quizName
//       );

//       dispatch(setQuestions(filteredQuestions));
//       dispatch(setCurrentQuestionIndex(0));
//       dispatch(setCorrectAnswers(0));
//     } catch (err) {
//       console.error(err);
//       dispatch(
//         setError(err.message || 'An error occurred while fetching questions.')
//       );
//     }
//   }
// );

// // thunks.js
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as constants from './constants';
// import { quizApi } from '../../api/quizApi/quizApi';
// import { setError, setIsLoadingQuestions } from './actions';

// export const fetchChosenQuizThunk = createAsyncThunk(
//   constants.FETCH_CHOSEN_QUIZ,
//   async (quizName, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await quizApi.get(quizName);

//       const filteredQuestions = response.filter(
//         (question) => question.chozenQuiz === quizName
//       );

//       dispatch(setIsLoadingQuestions(false));
//       dispatch(setQuizStartTime(Date.now()));

//       return filteredQuestions;
//     } catch (err) {
//       dispatch(setError(err.message || 'An error occurred while fetching questions.'));
//       return rejectWithValue(err.message || 'An error occurred while fetching questions.');
//     }
//   }
// );

// // src/store/thunks.js
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { quizApi } from '../../api/quizApi/quizApi';

// export const fetchChosenQuiz = createAsyncThunk(
//   'quiz/fetchChosenQuiz',
//   async (quizName, thunkAPI) => {
//     try {
//       const response = await quizApi.get(quizName);
//       return response.filter((question) => question.chozenQuiz === quizName);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message || 'An error occurred while fetching questions.');
//     }
//   },
// );

// thunks.js

// import * as actions from './actions';
// import { quizApi } from '../../api/quizApi/quizApi';
// import { DEFAULT_QUIZ_DURATION } from './constants';

// export const fetchChosenQuiz = (quizName) => async (dispatch) => {
//   dispatch(actions.fetchQuizRequest());
//   try {
//     const response = await quizApi.get(quizName);
//     const filteredQuestions = response.filter((question) => question.chozenQuiz === quizName);
//     dispatch(actions.fetchQuizSuccess(filteredQuestions));
//     dispatch(actions.setTimer(DEFAULT_QUIZ_DURATION));
//   } catch (err) {
//     console.error(err);
//     dispatch(actions.fetchQuizFailure(err.message || 'An error occurred while fetching questions.'));
//   }
// };

// quiz/thunks.js

// quiz/thunks.js

import { quizApi } from '../../api/quizApi/quizApi';
import * as actions from './actions';

export const fetchChosenQuiz = (quizName) => async (dispatch) => {
  try {
    const response = await quizApi.get(quizName);

    const filteredQuestions = response.filter(
      (question) => question.chozenQuiz === quizName,
    );

    dispatch(
      actions.fetchQuizSuccess({
        questions: filteredQuestions,
        quizStartTime: Date.now(),
      }),
    );
  } catch (err) {
    console.error(err);
    dispatch(actions.fetchQuizFailure(err.message || 'An error occurred while fetching questions.'));
  }
};

//   const fetchChosenQuiz = useCallback(async () => {
//     try {
//       const response = await quizApi.get(quizName);

//       const filteredQuestions = response.filter(
//         (question) => question.chozenQuiz === quizName,
//       );

//       setQuestions(filteredQuestions);
//       setQuizStartTime(Date.now());
//     } catch (err) {
//       console.error(err);
//       setError(err.message || 'An error occurred while fetching questions.');
//     }
//   }, [quizName]);
