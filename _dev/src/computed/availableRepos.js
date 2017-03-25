import {compute} from 'cerebral'
import {state} from 'cerebral/tags'

/**
 * Get the repo data of the current project.
 */
const availableRepos = compute(
  state`repos`,
  (repos) => {
    if (repos) {
      return Object.keys(repos)
    }
    return []
  }
)

export default availableRepos
