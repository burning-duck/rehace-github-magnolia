import {state, props} from 'cerebral/tags'
import {set} from 'cerebral/operators'


/**
 * Take owner and repository from props and convert to project object.
 *
 * return path.error if owner or repository is missing
 * return path.exists if the project exists in state
 * return path.created if the project was created
 */
const createProjectEntry = ({state, props, path}) => {
    const {owner, repository} = props
    if (!owner || !repository) {
        return path.error({error: 'Owner or Repository is missing in props.'})
    }

    const projectId = btoa(`${owner}/${repository}`)
    const existingProject = state.get(`gh.projects.${projectId}`)
    if (existingProject) {
        return path.exists({project: existingProject})
    }

    const newProject = {
        id: projectId,
        owner: owner,
        repo: repository,
    }
    state.set(`gh.projects.${projectId}`, newProject)

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
    state.set(`gh.repos.${projectId}`, props.result)
}

// console.log actions
const dlog = (message) => (ctx) => console.log(message, ctx)
const dwarn = (message) => (ctx) => console.warn(message, ctx)
const derror = (message) => (ctx) => console.error(message, ctx)

export default {
    state: {
        projects: {},
        repos: {}
    },
    signals: {
        projectPageRegistered: [
            createProjectEntry, {
                created: [
                    fetchRepoData, {
                        success: [saveRepoData],
                        error: [derror('Could not fecth repo data.')]
                    }
                ],
                exists: [dlog('exists')],
                error: [derror('Could not register project')]
            }
        ]
    }
}