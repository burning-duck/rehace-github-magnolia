import React from 'react'
import { connect } from 'cerebral/react'
import { state, props } from 'cerebral/tags'

import availableRepos from '../computed/availableRepos'

const ProjectListItem = connect(
  {
    repo: state`repos.${props`projectId`}`
  },
  ({repo}) => {
    if (!repo) {
      return null
    }
    return (
      <li>{repo['full_name']}</li>
    )
  }
)
ProjectListItem.displayName = 'ProjectListItem'

const GithubProjectList = connect(
  {
    repos: availableRepos
  },
  ({repos}) => {
    return (
      <ul>
        <li>MENU</li>
        {repos.map((key) => (
          <ProjectListItem key={key} projectId={key}/>
        ))}
      </ul>
    )
  }
)
GithubProjectList.displayName = 'GithubProjectList'

export default GithubProjectList
