import React, { useEffect, useState } from 'react'
import { useUser, useExample, useTheTodo } from '../../hooks'
import axios from 'axios'
import { Table } from 'semantic-ui-react'
import { Button, Icon, } from 'semantic-ui-react'
import Modal from '../ui/Modal'
import Tabs from './Tabs'

export default () => {
  
  const { user, toggleUser } = useUser()
  const { todos, userTodos, deleteTodos, addTodo } = useTheTodo()
  const { getExampleResolved } = useExample()
  const [modalVisible, setModalVisibility] = useState(false)
  function showModal() {
    setModalVisibility(true)
  }

  function fakeHandleFormSubmit() {
    getExampleResolved().then(resp => {
      console.log('during modal close', resp)
      setModalVisibility(false)
    })
  }

//useEffect(() =>{
 // useTheTodo(addTodo())
//})
    

  useEffect(() => {
    axios.get('/api')
  }, [])
  return (
    <div className="app-container">
      {
        modalVisible &&
        <Modal dismiss={() => setModalVisibility(false)}>
          <div>
            form to create todo...
            <Button icon onClick={fakeHandleFormSubmit}>
              <Icon name='plus' />
            </Button>
          </div>
          <form > 
                <input 
                 placeholder="ADD YOUR TODO" />
            </form>
        </Modal>
      }

      <div className="d-flex justify-content-between">
        <h2>user todos start</h2>
        <Button icon onClick={showModal}>
          <Icon name='plus' />
        </Button>
      </div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        < Tabs/>
        <Table.Body>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell textAlign='right'>
              <span>toggle status</span>
              <Button icon>
                <Icon name='trash' />
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}