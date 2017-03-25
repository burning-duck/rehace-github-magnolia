import Rehace from './rehace'
import controller from './controller'

// Global styles
import 'semantic-ui-css/semantic.css'

// Global components to register
import GithubProjectRegistration from './components/GithubProjectRegistration'
import GithubProjectHeader from './components/GithubProjectHeader'
import GithubProjectMetric from './components/GithubProjectMetric'
import GithubProjectList from './components/GithubProjectList'


/**
 * Connect components to controller and make them globally available.
 */
export default Rehace({
  controller: controller,
  components: {
    'GithubProjectRegistration': GithubProjectRegistration,
    'GithubProjectHeader': GithubProjectHeader,
    'GithubProjectMetric': GithubProjectMetric,
    'GithubProjectList': GithubProjectList
  }
})
