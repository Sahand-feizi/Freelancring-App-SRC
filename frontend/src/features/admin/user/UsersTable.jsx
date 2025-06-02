import React from 'react'
import Table from '../../../ui/Table'
import useUsers from '../useUsers'
import UserRow from './UserRow'

function UsersTable() {
  const { isLoading, users } = useUsers()

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {
          users?.map((user, index) => (
            <UserRow key={user._id} index={index} user={user}/>
          ))
        }
      </Table.Body>
    </Table>
  )
}

export default UsersTable
