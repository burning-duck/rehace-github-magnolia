import React from 'react'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'

/**
 * Calls the projectRegistered signal on mount.
 *
 * The component has no visual representation.
 * Just used to inform the state about a a project.
 */
class GithubProjectRegistration extends React.Component {
  componentDidMount () {
    const {register, owner, repo} = this.props
    register({owner, repo})
  }

  render () {
    return null
  }
}
GithubProjectRegistration.displayName = 'GithubProjectRegistration'
GithubProjectRegistration.propTypes = {
  register: React.PropTypes.func.isRequired,
  owner: React.PropTypes.string.isRequired,
  repo: React.PropTypes.string.isRequired
}

/**
 * Connect the component to the state.
 */
const StatefullProjectRegistration = connect(
  {
    register: signal`projectRegistered`
  },
  GithubProjectRegistration
)
StatefullProjectRegistration.displayName = 'StatefullProjectRegistration'

/**
 * Export the connected component, as this is the only way it should be used globally.
 */
export default StatefullProjectRegistration
