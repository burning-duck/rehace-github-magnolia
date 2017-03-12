/**
 * HOC connecting a Component to a Cerebral controller.
 *
 * This allows us to create multiple Cerebral containers
 * all connected to a single controller.
 */
import React from 'react'
import {Container} from 'cerebral/react'

export default function ControllerConnector(controller) {
    return function ControllerConnectorHocFactory(Component) {
        return function RemaceHocContainer(props) {
            return (
                <Container controller={controller}>
                    <Component {...props} />
                </Container>
            )
        }
    }
}
