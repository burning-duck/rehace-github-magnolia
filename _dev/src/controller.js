import {Controller} from 'cerebral'
import HttpProvider from 'cerebral-provider-http'
import Devtools from 'cerebral/devtools'

// Signals
import projectRegistered from './signals/projectRegistered'
import projectSelected from './signals/projectSelected'

/**
 * The Cerebral Controller.
 */
export default Controller({
  devtools: Devtools({
    remoteDebugger: 'localhost:8585'
  }),
  state: {
    title: 'ReMaCe - State Title',
    projects: {},
    repos: {},
    selected: null
  },
  signals: {
    projectRegistered: projectRegistered,
    projectSelected: projectSelected
  },
  providers: [
    HttpProvider({
      baseUrl: 'https://api.github.com',
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
  ]
})
