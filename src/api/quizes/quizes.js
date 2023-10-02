// import axios from '../service';

// const quizes = {
//   get: () => axios.get('/quiz')
//     .then(({ data }) => data)
//     .catch((err) => {
//       throw new Error(err);
//     }),
//   post: (params) => axios.post('/quiz', params)
//     .then(({ data }) => data)
//     .catch((err) => {
//       throw new Error(err);
//     }),
// };

// export { quizes };

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizes = createApi({
  reducerPath: 'quizes',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64f4523e932537f4051a408a.mockapi.io/api/v1/' }),
  endpoints: (builder) => ({
    getQuizesByName: builder.query({
      query: (quiz) => quiz,
    }),
  }),
});

export const { useGetQuizesByNameQuery } = quizes;
