import axios from '../service';

const lotrQuiz = {
  get: () => axios.get('/lotr')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { lotrQuiz };
