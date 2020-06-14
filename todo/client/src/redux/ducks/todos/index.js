// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"



let id = 1

// 2. action definitions
const GET_TODO = 'todo/GET_TODO'
const ADD_TODO = 'todo/ADD_TODO'
const DELETE_TODO = 'todo/DELETE_TODO'



// 3. initial state
const initialState = {
  todos: [],//KESE- will be getting my todos from array...array will initially be empty
  
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO://KESE- update todos list and return new todos
      return {...state, todos: action.payload}
    case DELETE_TODO:
        return {...state, todos: state.todos.filter(todo => action.payload !== todo.id)}
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


function addUserTodo(text){
  return dispatch =>{
    axios.post('./api', {text: text, status: 'active'})
    .then(resp =>{
      dispatch (getTodos())
    })
  }
}

function deleteTodos(id){
   return dispatch =>{
        axios.delete('/api/todos').then(resp =>{
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        })
    }
}





// 6. custom hook
export function useTheTodo() {
  const dispatch = useDispatch()
  const todo = useSelector(appState => appState.todoState.todo)

 const addTodo = ()  => dispatch (addUserTodo())
 const userTodos = () => dispatch (getTodos())
 const removeTodo = () => dispatch(deleteTodos(id))
 


  return {  userTodos, removeTodo, todo, addTodo }
}
