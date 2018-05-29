import { FETCH_POSTS, NEW_POST } from './actionTypes';

// each action creator is going to be a function that needs to be exported
export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
}

export const createPost = (postData) => dispatch => {
  console.log('Post action called');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
}
