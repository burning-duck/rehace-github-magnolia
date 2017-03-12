// Cerebral
import {Controller} from 'cerebral'
import Devtools from 'cerebral/devtools'

// ReMaCe
import Remace from './remace'

// Components to register
import ProjectPage from './components/ProjectPage'

import 'semantic-ui-css/semantic.min.css'

// Connect everything
Remace({
    controller: Controller({
        devtools: Devtools({
            remoteDebugger: 'localhost:8585'
        }),
        state: {
            title: 'ReMaCe - State Title'
        }
    }),
    components: {
        'FooProjectPage': ProjectPage
    }
})

