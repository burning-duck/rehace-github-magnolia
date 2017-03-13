import React from 'react'
import {connect} from 'cerebral/react'
import computed from '../../computed'

import {Header, Icon} from 'semantic-ui-react'

const RepoHeader = connect(
    {
        repo: computed.currentRepo
    },
    ({repo}) => {
        if (!repo) {
            return null
        }
        return (
            <Header as={'h2'} inverted={true} icon={true} textAlign={'center'}>
                <Icon name={'users'} circular={true} inverted={true} />
                <Header.Content>
                    {repo['full_name']}
                    <Header.Subheader>
                        {repo['description']}
                    </Header.Subheader>
                </Header.Content>
             </Header>
        )
    }
)
RepoHeader.displayName = 'RepoHeader'

export default RepoHeader
