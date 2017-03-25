import React from 'react'
import {connect} from 'cerebral/react'
import selectedRepo from '../computed/selectedRepo'

import PageHeader from './PageHeader'

/**
 * Display a header connected to state.
 *
 * Uses first project.
 */
const CurrentProjectHeader = connect({
  repo: selectedRepo
}, ({title, description, repo}) => {
  const hasRepo = !!repo
  let image = null
  if (hasRepo && repo['owner'] && repo['owner']['avatar_url']) {
    image = repo['owner']['avatar_url']
  }
  return (
    <PageHeader title={hasRepo ? repo['name'] : title}
      subtitle={hasRepo ? repo['description'] : description}
      image={image}
    />
  )
})

/**
 * Display a header.
 *
 * - use current project if overwrite is truthy.
 * - use given properties if overwrite is falthy.
 */
const GithubProjectHeader = ({title, description, overwrite}) => {
  if (overwrite) {
    return (<CurrentProjectHeader title={title} subtitle={description} />)
  }
  return (<PageHeader title={title} subtitle={description} />)
}

// META
GithubProjectHeader.displayName = 'GithubProjectHeader'
GithubProjectHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  overwrite: React.PropTypes.bool.isRequired
}
GithubProjectHeader.defaultProps = {
  overwrite: false
}

// API
export default GithubProjectHeader
