import React from 'react'

/**
 * Display a header with title and subtitle.
 */
const Header = ({title, subtitle}) => (
  <header>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </header>
)
Header.displayName = 'Header'
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
}
Header.defaultProps = {
  title: '',
  subtitle: ''
}

export default Header
