import React from 'react';
import {Controller} from 'cerebral'
import {connect} from 'cerebral/react'
import {Container} from 'cerebral/react'
import {state, props, signal} from 'cerebral/tags'
import {set} from 'cerebral/operators'
import ReactHabitat from 'react-habitat'
import Devtools from 'cerebral/devtools'


const Holla = connect({title: state`title`}, ({title}) => (<h2>{title}</h2>))

const MyApp = () => (
    <div>
        <h1>App</h1>
        <Holla />
    </div>
)
MyApp.displayName = 'MgnlMyApp'

const TitleButton = connect(
    {
        click: signal`baam`
    },
    ({dings = 'bums', click}) => {
        return (
            <button onClick={() => click({title: dings})}>Make {dings}</button>
        )
    }
)

const dev = Devtools({
    remoteDebugger: 'localhost:8585'
})


const wrap = (Element, controller) => (props) => (
    <Container controller={controller}>
        <Element {...props} />
    </Container>
)


const MgnlContainer = (controller) => {
    const habitatContainer = new ReactHabitat.Container()
    return {
        register: (Element) => {
            const displayName = Element.displayName
            if (!displayName) {
                throw Error()
            }
            habitatContainer.register(Element.displayName, controller)
        },
        container: habitatContainer
    }
}

class AppBootstrapper extends ReactHabitat.Bootstrapper {
    constructor() {
        super()

        const controller = Controller({
            devtools: dev,
            state: {
                title: 'HOLLA'
            },
            signals: {
                baam: [
                    set(state`title`, props`title`)
                ]
            }
        })

        const mgnlConatiner = MgnlContainer(controller)
        mgnlConatiner.register(MyApp)


        const container = new ReactHabitat.Container()
        container.register('MyApp', wrap(MyApp, controller))
        container.register('TitleButton', wrap(TitleButton, controller))

        this.setContainer(container)
    }
}

new AppBootstrapper()
