// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_USER = 'adminDuck/GET_USER'
const DELETE_USER = 'adminDuck/DELETE_USER'
const CREATE_USER = 'adminDuck/CREATE_USER'

// 3. initial state
const initialState = {
  users: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, users: action.payload }
    case DELETE_USER:
      return { ...state, users: state.users.filter(user => action.payload !== user.id)  
    }
    default:
      return state
  }
}

// 5. action creators
function getUserData() {
  return dispatch => {
    axios.get('/api/users').then(resp => {
      console.log(resp)
      dispatch({
        type: GET_USER,
        payload: resp.data
      })
    })
  }
}

function removeUserData(id) {
    return dispatch => {
        axios.delete('/api/users/' + id).then(resp => {
            dispatch({
                type: DELETE_USER,
                payload: id 
            })
        })
    }
}


function createUserData(email) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios.post('/api/users/', {email}).then(resp => {
        dispatch(getUserData())
        resolve('coming from example duck!')
      })
    })
  }
}



// 6. custom hook
export function useAdmin() {
  const dispatch = useDispatch()
  const users = useSelector(appState => appState.adminState.users)

  const getUser = () => dispatch(getUserData())
  const removeUser = (id) => dispatch(removeUserData(id))
  const createUser = (email) => dispatch(createUserData(email))


  return { users, getUser, removeUser, createUser }
}
