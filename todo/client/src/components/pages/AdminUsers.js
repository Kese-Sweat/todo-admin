import React, { useEffect, useState } from 'react'
import { useExample } from '../../hooks'
import { useAdmin } from '../../hooks'
import { Table } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import Modal from '../ui/Modal'

export default () => {
  const [modalVisible, setModalVisibility] = useState(false)
  const [ email, setEmail ] = useState('')
  const { users, getUser, removeUser, createUser } = useAdmin()
  function showModal() {
    setModalVisibility(true)
  }
  function handleFormSubmit() {
    createUser(email).then(resp => {
      console.log('during modal close', resp)
      setModalVisibility(false)
    })
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div className="app-container">
      {
        modalVisible &&
        <Modal dismiss={() => setModalVisibility(false)}>
          <div>
            <form>
              <div>Enter your EMAIL:</div>
              <input onChange={(e) => setEmail(e.target.value)}/>
            </form>
            <Button icon onClick={handleFormSubmit}>
              <Icon name='plus' />
            </Button>
          </div>
        </Modal>
      }
      <div className="d-flex justify-content-between">
        <h2>admin users start</h2>
        <Button icon onClick={showModal}>
          <Icon name='plus' />
        </Button>
      </div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      
        <Table.Body>
        {users.map(user => {
          return (
            <Table.Row>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell textAlign='right'>
                <Button icon>
                  <Icon name='trash' onClick={() => removeUser(user.id)}/>
                </Button>
              </Table.Cell>
            </Table.Row>
          )
        })}
        </Table.Body>
      </Table>
    </div>
  )
}

// Admin Users Page:
// GET all users (SELECT)
// DELETE user (DELETE)
// CREATE user (INSERT INTO)