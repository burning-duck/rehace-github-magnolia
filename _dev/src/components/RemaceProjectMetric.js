import React from 'react'
import {connect} from 'cerebral/react'
import selectedRepo from '../computed/selectedRepo'

const RemaceProjectMetric = connect(
  {
    repo: selectedRepo
  },
  ({title, metric, repo}) => {
    let metricValue = 0
    if (repo && repo[metric]) {
      metricValue = repo[metric]
    }
    return (
      <div>
        <h3>{title}</h3>
        <pre>{metric} = {metricValue}</pre>
      </div>
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
