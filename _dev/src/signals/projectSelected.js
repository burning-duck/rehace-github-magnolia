/**
 * Set the selected project.
 */
const setProjectAsSelected = ({state, props}) => {
  const projectId = props.id
  state.set('selected', projectId)
}

export default [
  setProjectAsSelected
]
