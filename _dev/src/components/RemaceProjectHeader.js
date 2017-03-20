import React from 'react'
import {connect} from 'cerebral/react'

import currentRepo from '../computed/currentRepo'
import Header from './Header'

/**
 * Display a header connected to state.
 */
const CurrentProjectHeader = connect(currentRepo, Header)

/**
 * Display a header.
 *
 * - use current project if overwrite is truthy.
 * - use given properties if overwrite is falthy.
 */
const RemaceProjectHeader = ({title, description, overwrite}) => {
  if (overwrite) {
    return (<CurrentProjectHeader />)
  }
  return (<Header title={title} subtitle={description} />)
}

// META
RemaceProjectHeader.displayName = 'RemaceProjectHeader'
RemaceProjectHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  overwrite: React.PropTypes.bool.isRequired
}
RemaceProjectHeader.defaultProps = {
  overwrite: false
}

// API
export default RemaceProjectHeader
