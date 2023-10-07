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
  update: (quizzes) => axios.put('/your-quiz', { quizzes }) // Modify the route as needed
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizApi };
