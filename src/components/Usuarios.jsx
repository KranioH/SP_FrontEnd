import React from 'react'

const Usuarios = ({users}) => {
  return (
    <div className='usuario'>
        <p>{users.name}</p>
        <p>{users.email}</p>
    </div>
  )
}

export default Usuarios