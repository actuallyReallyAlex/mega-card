import React from 'react'
import Pill from './MegaCard/Types/Pill'
import Card from './MegaCard/Types/Card'
import { propTypes } from './constants'

const MegaCard = props => {
  const { type } = props

  switch (type) {
    case 'pill':
      return <Pill {...props} />
    case 'card':
      return <Card {...props} />
    default:
      return <Card {...props} />
  }
}

MegaCard.propTypes = propTypes

export default MegaCard
