/**
 * Take owner and repository from props and convert to project object.
 *
 * return path.error if owner or repository is missing
 * return path.exists if the project exists in state
 * return path.created if the project was created
 */
const createProjectEntry = ({state, props, path}) => {
  const {owner, repo} = props
  if (!owner || !repo) {
    return path.error({error: 'Owner or Repository is missing in props.'})
  }

  const projectId = btoa(`${owner}/${repo}`)
  const existingProject = state.get(`gh.projects.${projectId}`)
  if (existingProject) {
    return path.exists({project: existingProject})
  }

  const newProject = {
    id: projectId,
    owner: owner,
    repo: repo
  }
  state.set(`projects.${projectId}`, newProject)

  return path.created({project: newProject})
}

/**
 * Take project.owner and project.repo from props and query /repo from github.
 *
 * return path.success on success
 * return path.error on error
 */
const fetchRepoData = ({props, http, path}) => {
  return http.get(`/repos/${props.project.owner}/${props.project.repo}`)
    .then(path.success)
    .catch(path.error)
}

/**
 * Take fetch result from props and save to state.
 */
const saveRepoData = ({state, props}) => {
  const projectId = props.project.id
  state.set(`repos.${projectId}`, props.result)
}

const setProjectAsSelectedIfFirst = ({state, props}) => {
  const projectId = props.project.id
  const selected = state.get('selected')
  if (!selected) {
    state.set('selected', projectId)
  }
}

const logError = (message) => (ctx) => console.error(message, ctx)
const noop = () => {}

const projectRegistered = [
  createProjectEntry, {
    created: [
      fetchRepoData, {
        success: [
          saveRepoData,
          setProjectAsSelectedIfFirst
        ],
        error: [logError('Could not fecth repo data.')]
      }
    ],
    exists: [noop],
    error: [logError('Could not register project')]
  }
]

export default projectRegistered
