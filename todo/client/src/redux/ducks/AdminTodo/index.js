// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_TODOS = './GET_TODOS'

// 3. initial state
const initialState = {
    todos: {},
  }
  
  // 4. reducer
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_TODOS:
        return { ...state, example: action.payload }
      
      default:
        return state
    }
  }

// 5. action creators
function getTodos() {
  return dispatch => {
      axios.get('/api/todos').then(resp => {
          dispatch({
              type: GET_TODOS
          })
      })
    
  }
}



// 6. custom hook
export function useTodo() {
  const dispatch = useDispatch()
  const todos = useSelector(appState => appState.todoState.todos)

  const getAllTodos = () => dispatch(getTodos())
  

 
  return { todos, getAllTodos  }
}
