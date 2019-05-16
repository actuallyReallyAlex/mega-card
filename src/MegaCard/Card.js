import React from 'react'
import { Box, Text } from 'grommet'
import { Info } from 'grommet-icons'
import { buildShadow, colors, defaultProps, propTypes } from '../constants'

const Card = ({ background, color, data, shadowSize, shadowType, title }) => {
  return (
    <Box
      align="center"
      background={background}
      direction="row"
      gap="medium"
      justify="between"
      margin="small"
      pad="medium"
      round="medium"
      style={{ boxShadow: buildShadow(shadowSize, shadowType) }}
    >
      <Box>
        <Box
          height="8px"
          round="full"
          style={{ backgroundColor: colors[color] }}
          width="8px"
        />
      </Box>
      <Box margin={{ right: 'medium' }}>
        <Text size="16px" weight="bold">
          {title}
        </Text>
        <Text size="small" color="dark-4">
          {data}
        </Text>
      </Box>
      <Box>
        <Box
          align="center"
          height="35px"
          justify="center"
          round="full"
          style={{ backgroundColor: colors[color] }}
          width="35px"
        >
          <Info color="white" size="20px" />
        </Box>
      </Box>
    </Box>
  )
}

Card.propTypes = propTypes

Card.defaultProps = defaultProps

export default Card
