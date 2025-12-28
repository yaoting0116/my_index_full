import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const profile = useSelector((s) => s.profile)
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <img src="/avatar-placeholder.png" alt="avatar" className="avatar" />
          <div>
            <h1 className="brand-name">{profile.name}</h1>
            <div className="brand-title">{profile.title}</div>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
