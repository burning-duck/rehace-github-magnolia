import React from 'react'

import {Header} from 'semantic-ui-react'

/**
 * Display a header with title and subtitle.
 */
const PageHeader = ({title, subtitle, image}) => (
  <Header as={'h1'}
    content={title}
    subheader={subtitle}
    image={image}
  />
)

PageHeader.displayName = 'PageHeader'
PageHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  image: React.PropTypes.string
}
PageHeader.defaultProps = {
  title: '',
  subtitle: ''
}

export default PageHeader
