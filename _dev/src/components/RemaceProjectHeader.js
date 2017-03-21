import React from 'react'
import {connect} from 'cerebral/react'
import selectedRepo from '../computed/selectedRepo'

import Header from './Header'

/**
 * Display a header connected to state.
 *
 * Uses first project.
 */
const CurrentProjectHeader = connect({
  repo: selectedRepo
}, ({title, description, repo}) => {
  const hasRepo = !!repo
  return (
    <Header title={hasRepo ? repo['name'] : title} subtitle={hasRepo ? repo['description'] : description} />
  )
})

/**
 * Display a header.
 *
 * - use current project if overwrite is truthy.
 * - use given properties if overwrite is falthy.
 */
const RemaceProjectHeader = ({title, description, overwrite}) => {
  if (overwrite) {
    return (<CurrentProjectHeader title={title} subtitle={description} />)
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
