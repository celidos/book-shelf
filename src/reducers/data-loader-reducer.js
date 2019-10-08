import {
    REQUEST_BOOKS, RECEIVE_BOOKS,
    REQUEST_ERROR
  } from "../actions/actions";
  
  export function booksReceiver(state = {
    isFetching: false,
    items: []
  }, action) {
    switch (action.type) {
      case REQUEST_BOOKS:
        return Object.assign({}, state, {
          isFetching: true
        })
      case RECEIVE_BOOKS:
        return Object.assign({}, state, {
          isFetching: false,
          items: action.data,
          lastUpdated: action.receivedAt
        })
      case REQUEST_ERROR:
        return Object.assign({}, state, {
          isFetching: false,
          error: action.message,
        })
      default:
        return state;
    }
  }