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
  axios.get('/admin/users').then(resp =>{
 //KESE- I NEED TO FIGURE OUT WHAT URL I AM USING FOR MY TODOS???
    dispatch({
     type: GET_TODO,
      payload: resp.data
    })
  })
}



// 6. custom hook
export function useTheTodo() {
  const dispatch = useDispatch()
  const todos = useSelector(appState => appState.todosState.user)

 const userTodos = () => dispatch (getTodos())
 


  return { todos, userTodos }
}
