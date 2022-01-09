import * as React from "react"
import { Link } from "gatsby"
import { header, container, title,  navlist, ulNav, liItem, linkText } from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={header}>
    <div className={container}>
      <h2 className={title}>{siteTitle}</h2>
      <nav className={navlist}>
        <ul className={ulNav}>
          <li className={liItem}>
            <Link to="/" className={linkText}>
              Home
            </Link>
          </li>
          <li className={liItem}>
            <Link to="/roles" className={linkText}>
              Roles
            </Link>
          </li>
          <li className={liItem}>
            <Link to="/players" className={linkText}>
              Players
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header
