import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <title>This is my portfolio.</title>
      <h1>Ethan Gai</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
