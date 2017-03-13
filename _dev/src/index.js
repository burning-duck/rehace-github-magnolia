// Cerebral
import {Controller} from 'cerebral'
import HttpProvider from 'cerebral-provider-http'
import Devtools from 'cerebral/devtools'

// ReMaCe
import Remace from './remace'

// Modules
import gh from './gh'

// Components to register
import RegisterProject from './gh/components/RegisterProject'
import RepoHeader from './gh/components/repo/RepoHeader'
import PageHeader from './gh/components/PageHeader'

// Add some styles
import 'semantic-ui-css/semantic.min.css'

// Connect everything
Remace({
    controller: Controller({
        devtools: Devtools({
            remoteDebugger: 'localhost:8585'
        }),
        state: {
            title: 'ReMaCe - State Title'
        },
        modules: {
            gh
        },
        providers: [
            HttpProvider({
                baseUrl: 'https://api.github.com',
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            })
        ]
    }),
    components: {
        'RegisterProject': RegisterProject,
        'RepoHeader': RepoHeader,
        'PageHeader': PageHeader
    }
})
