import React from 'react';
import {FETCH_USERS,DELETE_USERS,EDIT_USER,UPDATE_USER} from '../actions/typos';
const state_0 = {
  portion: {},
  fake: []
}

const Users = (state = state_0, action)=>{
  switch (action.type) {
    case FETCH_USERS:
    return {
      ...state,
      state_0: action.payload
    }
    case DELETE_USERS:
    return {
      ...state,
      state_0: state.state_0.filter(user => user.id !== action.payload)
    }
    case UPDATE_USER:
    return {

       ...state,
       fake: action.payload
      //
      // state_0:  state.state_0.map(user => user.id === action.payload.id? (user = action.payload): user)
    }
    case EDIT_USER:
    return {
      ...state,
      portion:  action.payload
    }

    default:
    return state;

  }
}
export default Users;
