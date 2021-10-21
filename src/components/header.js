import * as React from "react"
import PropTypes from "prop-types"
import Logo from "../images/logo.svg"

const Header = () => (
  <header>
    <div>
      <nav>
        <div className="logo"><a href="index.html"><img src={Logo} alt="logo" /></a></div>
        <div className="links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#shopify">Shopify</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>
      </nav>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
