import React from 'react'
import { Box } from 'grommet'
import { colors, propTypes } from '../constants'

const Indicator = ({ color }) => {
  return (
    <Box>
      <Box
        height="8px"
        round="full"
        style={{ backgroundColor: colors[color] }}
        width="8px"
      />
    </Box>
  )
}

Indicator.propTypes = {
  color: propTypes.color
}

export default Indicator
