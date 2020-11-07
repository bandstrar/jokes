import axios from 'axios';

const baseUrl = 'https://official-joke-api.appspot.com/jokes';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/random`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getProgrammingJoke = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/programming/random`).then((response) => {
    resolve(response.data[0]);
  }).catch((error) => reject(error));
});

const getGeneralJoke = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/general/random`).then((response) => {
    resolve(response.data[0]);
  }).catch((error) => reject(error));
});

const getKnockJoke = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/knock-knock/random`).then((response) => {
    resolve(response.data[0]);
  }).catch((error) => reject(error));
});

export default {
  getJokes, getProgrammingJoke, getGeneralJoke, getKnockJoke,
};
