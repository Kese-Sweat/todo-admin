// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_TODO = 'todo/GET_TODO'



// 3. initial state
const initialState = {
  todos: [],//KESE- will be getting my todos from array...array will initially be empty
  
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO://KESE- update todos list and return new todos
      return {...state, todos: action.payload}
    default:
      return state
  }
}

//5. action creator
function getTodos(){
    return dispatch => {
        axios.get('/api').then(resp =>{
            dispatch({
                type: GET_TODO,
                payload: resp.data
            })
        })
    }
}

function deleteTodos(){
   return dispatch =>{
        axios.delete('/api').then(resp =>{
            dispatch({
                type: GET_TODO,
                payload: resp.data
            })
        })
    }
}





// 6. custom hook
export function useTheTodo() {
  const dispatch = useDispatch()
  const todos = useSelector(appState => appState.todosState.user)

 const userTodos = () => dispatch (getTodos())
 const removeTodo = () => dispatch(deleteTodos())
 


  return { todos, userTodos, removeTodo }
}
