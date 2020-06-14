import React from 'react'
import { Tab } from 'semantic-ui-react'
import { useTheTodo } from '../../hooks'




function Tabs(){
  const { todos, userTodos, deleteTodos, addTodo } = useTheTodo()
  
const panes = [
{ menuItem: 'ALL', render: () => <Tab.Pane>{userTodos}</Tab.Pane> },
  { menuItem: 'ACTIVE', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'COMPLETED', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

return(<div>
  <span>{TabExampleBasic()}</span>
</div>)
}

export default Tabs