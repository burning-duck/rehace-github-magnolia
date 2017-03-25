/**
 * Create the integraton between the used Frameworks.
 */
import ReactHabitat from 'react-habitat'
import RehaceContainer from './RemaceContainer'

class RehaceBootstrapper extends ReactHabitat.Bootstrapper {
  constructor (container) {
    super()
    this.setContainer(container)
  }
}

export default function Rehace (configuration) {
  const container = RehaceContainer(configuration)

  return new RehaceBootstrapper(container)
}
