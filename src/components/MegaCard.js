import React from 'react'
import PropTypes from 'prop-types'

const MegaCard = ({ version }) => {
  return (
    <div>
      <span>MegaCard {version}</span>
    </div>
  )
}

MegaCard.propTypes = {
  version: PropTypes.string
}

MegaCard.defaultProps = {
  version: '1.0'
}

export default MegaCard
