import axios from 'axios';

export default axios.create({
  baseURL: 'https://64f4523e932537f4051a408a.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
