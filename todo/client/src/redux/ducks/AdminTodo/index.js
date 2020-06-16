// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_TODOS = './GET_TODOS'
const DELETE_TODOS = './DELETE_TODOS'

// 3. initial state
const initialState = {
  todos: [],
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.payload }
    case DELETE_TODOS:
      return { ...state, todo: initialState.todos }

    default:
      return state
  }
}

// 5. action creators
function getTodos() {
  return dispatch => {
    axios.get('/api/todos/admin').then(resp => {
      console.log(resp)
      // dispatch({
      //     type: GET_TODOS,
      //     payload: resp.data
      // })
    })

  }
}
function deleteTodo(id) {
  return dispatch => {
    axios.delete('/api/todos/admin/' + id).then(resp => {
      dispatch(getTodos())
    })
  }
}

function patchTodo(todo) {
  return dispatch => {
    const newUpdate = todo.status === 'completed' ? 'active' : 'completed'
    axios.patch('/api/todos/admin' + todo.id, { status: newUpdate }).then(resp => {
      dispatch(getTodos())
    })
  }
}


// 6. custom hook
export function useTodo() {
  const dispatch = useDispatch()
  const todos = useSelector(appState => appState.todoState.todos)

  const getAllTodos = () => dispatch(getTodos())
  const deleteAllTodo = (id) => dispatch(deleteTodo(id))
  const patchAllTodo = (todo) => dispatch(patchTodo(todo))


  return { todos, getAllTodos, deleteAllTodo, patchAllTodo }
}
