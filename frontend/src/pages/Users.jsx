import React from 'react'
import UsersHeader from '../features/admin/user/UsersHeader'
import UsersTable from '../features/admin/user/UsersTable'

function Users() {
  return (
    <div className='space-y-2'>
      <UsersHeader />
      <UsersTable />
    </div>
  )
}

export default Users
