import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '04204cfe5f310fe3bca45120fb3a0bbb',
  },
});
