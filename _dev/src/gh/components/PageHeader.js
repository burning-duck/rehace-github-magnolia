import React from 'react'
import {connect} from 'cerebral/react'
import computed from '../computed'

const PageHeader = connect(
  {
    repo: computed.currentRepo
  },
  ({repo, title, description, overwrite}) => {
    const header = {
      title,
      description
    }
    if (overwrite && repo) {
      header['title'] = repo['full_name']
      header['description'] = repo['description']
    }

    return (
      <header>
        <h1>{header.title}</h1>
        <h2>{header.description}</h2>
      </header>
    )
  }
)
PageHeader.displayName = 'PageHeader'

export default PageHeader
