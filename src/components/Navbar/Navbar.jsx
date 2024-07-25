import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='nav-container'>
<div className='heading'>
    <h1>EcoConnect hub</h1>
</div>
<div className='search'>
    <input type="text" placeholder='Search Products' />
</div>

<div className='btn'>
    <button>Create New Project</button>
</div>
<div className='profile'>
    <img src="https://themewagon.github.io/corona-free-dark-bootstrap-admin-template/assets/images/faces/face15.jpg" alt="" srcset="" />
    <p>henry kelvin</p>
</div>
    </div>
  )
}
