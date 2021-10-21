import * as React from "react"
import PropTypes from "prop-types"

const Header = () => (
  <header>
    <div>
      <nav></nav>
      <div>
        <div className="hero-text">
          <h1 className="hero-h1">Robert Aguilar</h1>
          <p className="hero-para">React/Shopify  Developer </p>
        </div>
        <div className="hero-picture"></div>
      </div>
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
