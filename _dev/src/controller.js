import {Controller} from 'cerebral'
import HttpProvider from 'cerebral-provider-http'
import Devtools from 'cerebral/devtools'

/**
 * The Cerebral Controller.
 */
export default Controller({
  devtools: Devtools({
    remoteDebugger: 'localhost:8585'
  }),
  state: {
    title: 'ReMaCe - State Title'
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
