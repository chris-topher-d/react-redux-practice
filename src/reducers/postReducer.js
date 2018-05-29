import { FETCH_POSTS, NEW_POST } from '../actions/actionTypes';

const initialState = {
  // the posts that come in from our action (where we put the fetch request)
  items: [],

  // object containing the single post we add once we get a response
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }

    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }

    default:
      // return the current state
      return state;
  }
}
