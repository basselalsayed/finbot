import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <header style={headerStyle}>
        <h1>Finbot</h1>
        <Link style={linkStyle} to='/'>Home</Link>
      </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  width: '100%',
  position: 'fixed'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}