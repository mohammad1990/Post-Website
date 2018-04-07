import axios from 'axios';

export const FETCH_POSTS ='fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=MohammadTofiLove123'

export function fetchPosts(){
const request=  axios.get(`${ROOT_URL}/posts${API_KEY}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type:FETCH_POSTS,
    payload: request
  };
}
