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

// import { useGetQuizApiByNameQuery } from '../../api/quizApi/quizApi';
// import * as actions from './actions';

// export const fetchChosenQuiz = (quizName) => async (dispatch) => {
//   try {
//     const { data, error } = await useGetQuizApiByNameQuery(quizName).unwrap();

//     if (error) {
//       throw new Error(error.message || 'An error occurred while fetching questions.');
//     }

//     const filteredQuestions = data.filter((question) => question.chozenQuiz === quizName);

//     dispatch(
//       actions.fetchQuizSuccess({
//         questions: filteredQuestions,
//         quizStartTime: Date.now(),
//       }),
//     );
//   } catch (err) {
//     console.error(err);
//     dispatch(actions.fetchQuizFailure(err.message || 'An error occurred while fetching questions.'));
//   }
// };
