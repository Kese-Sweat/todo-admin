import React, { useEffect, useState } from 'react'
import { useExample, useTodo } from '../../hooks'
import { Table } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import Modal from '../ui/Modal'

export default () => {
  const { todos, getAllTodos } = useTodo()
  const [modalVisible, setModalVisibility] = useState(false)
  const { getExampleResolved } = useExample()
  function showModal() {
    setModalVisibility(true)
    getAllTodos()
  }
  function fakeHandleFormSubmit() {
    getExampleResolved().then(resp => {
      console.log('during modal close', resp)
      setModalVisibility(false)
    })
  }
  return (
    <div className="app-container">
      {
        modalVisible &&
        <Modal dismiss={() => setModalVisibility(false)}>
          <div>
            form to create todo as admin (w/ user)...
            <Button icon onClick={fakeHandleFormSubmit}>
              <Icon name='plus' />
            </Button>
          </div>
        </Modal>
      }
      <div className="d-flex justify-content-between">
        <h2>admin todos start</h2>
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

        <Table.Body>
          <Table.Row>
            <Table.Cell>todo 1</Table.Cell>
            <Table.Cell textAlign='right'>
              <span>toggle status</span>
              <Button icon>
                <Icon name='trash' onClick />
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}