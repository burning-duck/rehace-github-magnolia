import React from 'react'
import {connect} from 'cerebral/react'
import {state, props} from 'cerebral/tags'

import availableRepos from '../computed/availableRepos'

const ProjectListItem = connect(
  {
    repo: state`repos.${props`projectId`}`
  },
  ({repo}) => {
    if (!repo) {
      return null
    }
    let image = null
    if (repo['owner'] && repo['owner']['avatar_url']) {
      image = repo['owner']['avatar_url']
    }
    return (
      <div className='item'>
        <img className='ui avatar image' src={image} />
        <div className='content'>
          <div className='header'>{repo['full_name']}</div>
        </div>
      </div>
    )
  }
)
ProjectListItem.displayName = 'ProjectListItem'

const GithubProjectList = connect(
  {
    repos: availableRepos
  },
  ({title, description, repos}) => {
    return (
      <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div className='ui middle aligned selection list'>
          {repos.map((key) => (
            <ProjectListItem key={key} projectId={key}/>
            )
          )}
        </div>
      </div>
    )
  }
)
GithubProjectList.displayName = 'GithubProjectList'
GithubProjectList.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}
export default GithubProjectList
