import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>Satish Learning Portal</h1>
      <ul>
        <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/user'>User</Link></li>
      </ul>
    </div>
  )
}

export default Header
