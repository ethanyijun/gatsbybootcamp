import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <title>This is my portfolio.</title>
      <h1>
        <Link className={headerStyles.title} to="/">
          Ethan Gai
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.primaryNav}>
          <li className="linkWrapper">
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="linkWrapper">
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About me
            </Link>
          </li>
          <li className="linkWrapper">
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blogs
            </Link>
          </li>
          <li className="linkWrapper">
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
