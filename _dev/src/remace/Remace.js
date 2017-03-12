/**
 * Create the integraton between the used Frameworks.
 */
import ReactHabitat from 'react-habitat'
import RemaceContainer from './RemaceContainer'

class RemaceBootstrapper extends ReactHabitat.Bootstrapper {
    constructor(container) {
        super()
        this.setContainer(container)
    }
}

export default function Remace(configuration) {
    const container = RemaceContainer(configuration)

    return new RemaceBootstrapper(container)
}

