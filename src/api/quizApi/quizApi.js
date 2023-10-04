import axios from '../service';

const quizApi = {
  get: (chosenQuiz) => axios.get(`/your-quiz?quiz=${chosenQuiz}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (formData) => axios.post('/your-quiz', formData)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizApi };

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const quizApi = createApi({
//   reducerPath: 'quizSelect',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://64f4523e932537f4051a408a.mockapi.io/api/v1/' }),
//   endpoints: (builder) => ({
//     getQuizApiByName: builder.query({
//       query: (chosenQuiz) => `/your-quiz?quiz=${chosenQuiz}`,
//     }),
//   }),
// });

// export const { useGetQuizApiByNameQuery } = quizApi;
