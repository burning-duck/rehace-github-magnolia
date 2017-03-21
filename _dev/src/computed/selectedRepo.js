import {compute} from 'cerebral'
import {state} from 'cerebral/tags'

/**
 * Get the repo data of the current project.
 */
const selectedRepo = compute(
  state`selected`,
  (selected, get) => {
    if (selected) {
      return get(state`repos.${selected}`)
    }
    return null
  }
)

export default selectedRepo
