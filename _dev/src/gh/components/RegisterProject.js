import React from 'react'
import {connect} from 'cerebral/react'
import {signal} from 'cerebral/tags'

/**
 * ProjectPage:
 */
class RegisterProject extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const {register, owner, repository } = this.props
        register({owner, repository})
    }
    render() {
        return null
    }
}

export default connect(
    {
        register: signal`gh.projectPageRegistered`
    },
    RegisterProject
)
