/* eslint-disable no-param-reassign */
// // reducer.js

// import { createSlice } from '@reduxjs/toolkit';
// import * as actions from './actions';

// const initialState = {
//   questions: [],
//   error: '',
//   currentQuestionIndex: 0,
//   correctAnswers: 0,
//   timeLeft: DEFAULT_QUIZ_DURATION,
//   quizStartTime: null,
// };

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState,
//   reducers: {
//     // Add any additional synchronous reducers if needed
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(actions.setCurrentQuestionIndex, (state, action) => {
//         state.currentQuestionIndex = action.payload;
//       })
//       .addCase(actions.setCorrectAnswers, (state, action) => {
//         state.correctAnswers = action.payload;
//       })
//       .addCase(actions.setTimeLeft, (state, action) => {
//         state.timeLeft = action.payload;
//       })
//       .addCase(actions.setQuizStartTime, (state, action) => {
//         state.quizStartTime = action.payload;
//       })
//       .addCase(actions.setError, (state, action) => {
//         state.error = action.payload;
//       });
//     // Add additional reducers for async actions if needed
//   },
// });

// export default quizSlice.reducer;

// reducer.js
// import { createSlice } from '@reduxjs/toolkit';

// const DEFAULT_QUIZ_DURATION = 180;

// const timerSlice = createSlice({
//   name: 'timer',
//   initialState: {
//     timeLeft: DEFAULT_QUIZ_DURATION,
//     quizStartTime: null,
//   },
//   reducers: {
//     setTimeLeft: (state, action) => {
//       state.timeLeft = action.payload;
//     },
//     setQuizStartTime: (state, action) => {
//       state.quizStartTime = action.payload;
//     },
//   },
// });

// const quizDataSlice = createSlice({
//   name: 'quizData',
//   initialState: {
//     questions: [],
//     error: '',
//     currentQuestionIndex: 0,
//     correctAnswers: 0,
//   },
//   reducers: {
//     setQuestions: (state, action) => {
//       state.questions = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//     setCurrentQuestionIndex: (state, action) => {
//       state.currentQuestionIndex = action.payload;
//     },
//     setCorrectAnswers: (state, action) => {
//       state.correctAnswers = action.payload;
//     },
//   },
// });

// export const {
//   setTimeLeft,
//   setQuizStartTime,
// } = timerSlice.actions;

// export const {
//   setQuestions,
//   setError,
//   setCurrentQuestionIndex,
//   setCorrectAnswers,
// } = quizDataSlice.actions;

// export default {
//   timer: timerSlice.reducer,
//   quizData: quizDataSlice.reducer,
// };

// reducer.js
// import { createSlice } from '@reduxjs/toolkit';
// import * as constants from './constants';

// const initialState = {
//   questions: [],
//   error: '',
//   currentQuestionIndex: 0,
//   correctAnswers: 0,
//   timeLeft: DEFAULT_QUIZ_DURATION,
//   quizStartTime: null,
//   isLoadingQuestions: true,
// };

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(constants.FETCH_CHOSEN_QUIZ.fulfilled, (state, action) => {
//       state.questions = action.payload;
//       state.isLoadingQuestions = false;
//       state.quizStartTime = Date.now();
//     });
//     builder.addCase(constants.FETCH_CHOSEN_QUIZ.rejected, (state, action) => {
//       state.error = action.payload;
//       state.isLoadingQuestions = false;
//     });
//     // Add other extraReducers for additional actions if needed
//   },
// });

// export default quizSlice.reducer;

// // reducer.js
// import { createSlice } from '@reduxjs/toolkit';
// import * as constants from './constants';

// // src/store/quizSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchChosenQuiz = createAsyncThunk(
//   'quiz/fetchChosenQuiz',
//   async (quizName, thunkAPI) => {
//     try {
//       const response = await quizApi.get(quizName);
//       return response.filter((question) => question.chozenQuiz === quizName);
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message || 'An error occurred while fetching questions.');
//     }
//   }
// );

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState: {
//     questions: [],
//     currentQuestionIndex: 0,
//     correctAnswers: 0,
//     timeLeft: DEFAULT_QUIZ_DURATION,
//     quizStartTime: null,
//     error: '',
//     isLoading: false,
//   },
//   reducers: {
//     // Your other reducers...
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchChosenQuiz.pending, (state) => {
//         state.isLoading = true;
//         state.error = '';
//       })
//       .addCase(fetchChosenQuiz.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.questions = action.payload;
//         state.quizStartTime = Date.now();
//       })
//       .addCase(fetchChosenQuiz.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // Export your actions
// export const {
//   setCurrentQuestionIndex,
//   setCorrectAnswers,
//   setTimeLeft,
//   setError,
// } = quizSlice.actions;

// export default quizSlice.reducer;

// reducer.js

// reducer.js

// reducer.js

// reducer.js

// reducer.js

// import { createSlice } from '@reduxjs/toolkit';
// import * as actions from './actions';
// import { DEFAULT_QUIZ_DURATION } from './constants';

// const initialState = {
//   questions: [],
//   error: '',
//   currentQuestionIndex: 0,
//   correctAnswers: 0,
//   timeLeft: DEFAULT_QUIZ_DURATION,
//   quizStartTime: null,
// };

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(actions.fetchQuizSuccess, (state, action) => {
//         state.questions = action.payload;
//         state.quizStartTime = Date.now();
//       })
//       .addCase(actions.fetchQuizFailure, (state, action) => {
//         state.error = action.payload;
//       })
//       .addCase(actions.answerQuestion, (state, action) => {
//         const currentQuestion = state.questions[state.currentQuestionIndex];
//         if (currentQuestion.answer === action.payload) {
//           state.correctAnswers += 1;
//         }

//         if (state.currentQuestionIndex < state.questions.length - 1) {
//           state.currentQuestionIndex += 1;
//         }
//       })
//       .addCase(actions.setTimer, (state, action) => {
//         state.timeLeft = action.payload;
//       })
//       .addCase(actions.resetQuiz, (state) => {
//         state.questions = [];
//         state.error = '';
//         state.currentQuestionIndex = 0;
//         state.correctAnswers = 0;
//         state.timeLeft = DEFAULT_QUIZ_DURATION;
//         state.quizStartTime = null;
//       });
//   },
// });

// export default quizSlice.reducer;

// quiz/reducer.js

// import { createSlice } from '@reduxjs/toolkit';
// import * as types from './constants';

// const initialState = {
//   questions: [],
//   error: '',
//   currentQuestionIndex: 0,
//   correctAnswers: 0,
//   timeLeft: types.DEFAULT_QUIZ_DURATION, // Make sure to import DEFAULT_QUIZ_DURATION
//   quizStartTime: null,
//   isLoadingQuestions: true,
// };

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState,
//   reducers: {
//     [types.FETCH_QUIZ_SUCCESS]: (state, action) => ({
//       ...state,
//       questions: action.payload.questions,
//       quizStartTime: action.payload.quizStartTime,
//       isLoadingQuestions: false,
//     }),
//     [types.FETCH_QUIZ_FAILURE]: (state, action) => ({
//       ...state,
//       error: action.payload,
//       isLoadingQuestions: false,
//     }),
//     [types.UPDATE_CURRENT_QUESTION]: (state, action) => ({
//       ...state,
//       currentQuestionIndex: action.payload,
//     }),
//     [types.UPDATE_CORRECT_ANSWERS]: (state, action) => ({
//       ...state,
//       correctAnswers: action.payload,
//     }),
//     [types.UPDATE_TIME_LEFT]: (state, action) => ({
//       ...state,
//       timeLeft: action.payload,
//     }),
//   },
// });

// export const { reducer: quizReducer } = quizSlice;
// export const quizActions = quizSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';
// import * as types from './constants';

// const initialState = {
//   questions: [],
//   error: '',
//   currentQuestionIndex: 0,
//   correctAnswers: 0,
//   timeLeft: types.DEFAULT_QUIZ_DURATION,
//   quizStartTime: null,
//   isLoadingQuestions: true,
// };

// const quizSlice = createSlice({
//   name: 'quiz',
//   initialState,
//   reducers: {
//     [types.UPDATE_CURRENT_QUESTION]: (state, action) => {
//       state.currentQuestionIndex = action.payload;
//     },
//     [types.UPDATE_CORRECT_ANSWERS]: (state, action) => {
//       state.correctAnswers = action.payload;
//     },
//     [types.UPDATE_TIME_LEFT]: (state, action) => {
//       state.timeLeft = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(types.FETCH_QUIZ_SUCCESS, (state, action) => {
//         state.questions = action.payload.questions;
//         state.quizStartTime = action.payload.quizStartTime;
//         state.isLoadingQuestions = false;
//       })
//       .addCase(types.FETCH_QUIZ_FAILURE, (state, action) => {
//         state.error = action.payload;
//         state.isLoadingQuestions = false;
//       });
//   },
// });

// export const { reducer: quizReducer } = quizSlice;
// export const quizActions = quizSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
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
      .addCase(types.RESET_STATE, () => initialState);
  },
});

export const { reducer: quizReducer } = quizSlice;
