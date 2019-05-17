import React from 'react'
import { Box } from 'grommet'
import { colors, icons, propTypes } from '../constants'

const Icon = ({ color, icon }) => {
  const Figure = icons[icon]
  return (
    <Box>
      <Box
        align="center"
        height="42px"
        justify="center"
        round="full"
        style={{ backgroundColor: colors[color] }}
        width="42px"
      >
        <Figure color="white" size="28px" />
      </Box>
    </Box>
  )
}

Icon.propTypes = {
  color: propTypes.color,
  icon: propTypes.icon
}

export default Icon
