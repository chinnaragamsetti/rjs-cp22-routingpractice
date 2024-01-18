// Write your JS code herei

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navheader">
    <div className="wavecontainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="waveimage"
      />
      <p className="wave">Wave</p>
    </div>
    <ul className="nav-menu">
      <li className="lists">
        <Link to="/">Home</Link>
      </li>
      <li className="lists">
        <Link to="/about">About</Link>
      </li>
      <li className="lists">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
