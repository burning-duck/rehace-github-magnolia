/**
 * Create a ReactHabitat.Container.
 *
 * - Connects given Components to the Cerebral controller.
 * - Registers connected Components in a Habitat container.
 */
import ReactHabitat from 'react-habitat'
import ControllerConnector from './ControllerConnector'

export default function RemaceContainer ({controller, components}) {
    const connect = ControllerConnector(controller)
    const container = new ReactHabitat.Container()

    Object.keys(components).forEach((key) => {
        const connectedComponent = connect(components[key])
        container.register(key, connectedComponent)
        console.log('Register component', key, connectedComponent)
    })

    return container
}