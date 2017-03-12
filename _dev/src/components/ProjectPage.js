import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

const ProjectPage = connect(
    {
        stateTitle: state`title`
    },
    ({dialogTitle, stateTitle}) => (
        <div>
            <h1>ProjectPage (React Component)</h1>
            <pre>
            The title from dialog is: {dialogTitle || 'nuthin'}<br />
            The title from state is: {stateTitle || 'nuthin'}<br />
        </pre>
        </div>
    ))

ProjectPage.displayName = 'ProjectPage'
ProjectPage.propTypes = {
    dialogTitle: React.PropTypes.string,
    stateTile: React.PropTypes.string
}

export default ProjectPage
