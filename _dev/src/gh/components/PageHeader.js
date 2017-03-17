import React from 'react'
import {connect} from 'cerebral/react'
import computed from '../computed'

import {Header, Segment} from 'semantic-ui-react'

const PageHeader = connect(
  {
    repo: computed.currentRepo
  },
  ({repo, title, description, overwrite, icon, inverted, textAlign}) => {
    const headerProps = {
      content: title,
      subheader: description,
      inverted: inverted,
      textAlign: textAlign
    }
    if (icon) {
      headerProps['icon'] = icon
    }
    if (overwrite && repo) {
      headerProps['content'] = repo['full_name']
      headerProps['subheader'] = repo['description']
    }
    console.log('HeaderProps', headerProps)

    return (
      <Segment inverted={inverted} basic textAlign={textAlign}>
        <Header {...headerProps} />
      </Segment>
    )
  }
)
PageHeader.displayName = 'PageHeader'

export default PageHeader
