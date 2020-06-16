import React, { useEffect } from 'react'
import { Tab } from 'semantic-ui-react'
import { useTheTodo } from '../../hooks'




function Tabs(){
  const { todo, userTodos, deleteTodos, addTodo } = useTheTodo()
  console.log(todo)
  
const panes = [
  { menuItem: 'ALL', render: () => <Tab.Pane> {todo.map(todo =>{
  return <li>{todo.text}</li>
  })}</Tab.Pane> },
  { menuItem: 'ACTIVE', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'COMPLETED', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

useEffect (() => {
  userTodos()
},[])

return(<div>
  <span>{TabExampleBasic()}</span>

 


</div>)
}

export default Tabs