import React from 'react'
import {connect} from 'cerebral/react'
import selectedRepo from '../computed/selectedRepo'

import {Card, Statistic} from 'semantic-ui-react'
import NumberEasing from 'react-number-easing'

const metricTargets = {
  'stargazers_count': 'stargazers',
  'watchers_count': 'stargazers',
  'forks_count': 'network',
  'network_count': 'network',
  'open_issues_count': 'issues',
  'subscribers_count': 'watchers'
}

const RemaceProjectMetric = connect(
  {
    repo: selectedRepo
  },
  ({title, metric, repo}) => {
    let metricValue = 0
    let linkTarget = null
    if (repo && repo[metric]) {
      metricValue = repo[metric]
    }
    if (repo && metricTargets[metric]) {
      linkTarget = `https://github.com/${repo['full_name']}/${metricTargets[metric]}`
    }
    return (
      <Card centered href={linkTarget}>
        <Card.Content as={Statistic}>
          <Statistic.Value>
            <NumberEasing value={metricValue} />
          </Statistic.Value>
          <Statistic.Label>{title}</Statistic.Label>
        </Card.Content>
      </Card>
    )
  }
)

// META
RemaceProjectMetric.displayName = 'RemaceProjectMetric'
RemaceProjectMetric.propTypes = {
  title: React.PropTypes.string.isRequired,
  metric: React.PropTypes.string.isRequired,
  repo: React.PropTypes.object
}

export default RemaceProjectMetric
