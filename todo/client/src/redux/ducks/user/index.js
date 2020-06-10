// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const SET_USER = 'user/SET_USER'


// 3. initial state
const initialState = {
  
  user: { 
    id: 1,
    admin: true,
     
  }
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}


// 6. custom hook
export function useUser() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.userState.user)


  return { user }
}
