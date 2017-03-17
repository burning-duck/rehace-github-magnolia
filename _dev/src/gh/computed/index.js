import {compute} from 'cerebral'
import {state} from 'cerebral/tags'

const currentRepo = compute(
  (get) => {
    const projectIds = Object.keys(get(state`gh.projects`))
    if (!projectIds || projectIds.length === 0) {
      return null
    }
    const projectId = projectIds[0]
    return get(state`gh.repos.${projectId}`)
  }
)

const computed = {
  currentRepo
}

export default computed
