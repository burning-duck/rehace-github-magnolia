import Remace from './remace'
import controller from './controller'

// Global styles
import 'semantic-ui-css/semantic.css'

// Global components to register
import RemaceProjectRegistration from './components/RemaceProjectRegistration'
import RemaceProjectHeader from './components/RemaceProjectHeader'
import RemaceProjectMetric from './components/RemaceProjectMetric'

/**
 * Connect components to controller and make them globally available.
 */
export default Remace({
  controller: controller,
  components: {
    'RemaceProjectRegistration': RemaceProjectRegistration,
    'RemaceProjectHeader': RemaceProjectHeader,
    'RemaceProjectMetric': RemaceProjectMetric
  }
})
