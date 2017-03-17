import React from 'react'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'

/**
 * ProjectPage:
 */
class RegisterProject extends React.Component {
  componentDidMount () {
    const {register, owner, repo} = this.props
    register({owner, repo})
  }

  render () {
    return null
  }
}
RegisterProject.displayName = 'RegisterProject'
RegisterProject.propTypes = {
  register: React.PropTypes.func.isRequired,
  owner: React.PropTypes.string.isRequired,
  repo: React.PropTypes.string.isRequired
}

export default connect(
  {
    register: signal`gh.projectPageRegistered`
  },
  RegisterProject
)
