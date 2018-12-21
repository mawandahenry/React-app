import axios from 'axios';
import {FETCH_USERS,DELETE_USERS,EDIT_USER,UPDATE_USER} from './typos';
export const fetch_users =()=>async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: FETCH_USERS,
    payload: res.data
  })

}
export const delete_users = (id) => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: DELETE_USERS,
    payload: id
  })
}
export const edit_users = (id) => async dispatch => {
  const xx = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: EDIT_USER,
    payload: xx.data
  })
}
export const update_users = (load) => async dispatch => {
  const xx = await axios.put(`https://jsonplaceholder.typicode.com/users/${load.id}`,load);
  dispatch({
    type: UPDATE_USER,
    payload: xx.data
  })
}
