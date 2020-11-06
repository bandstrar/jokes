import axios from 'axios';

const baseUrl = 'https://official-joke-api.appspot.com/random_joke';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default { getJokes };
