import React from 'react'
import { Box, Text, Heading } from 'grommet'
import {
  buildShadow,
  colors,
  defaultProps,
  icons,
  propTypes
} from '../../constants'

const Pill = ({
  background,
  color,
  data,
  icon,
  indicator,
  shadowSize,
  shadowType,
  title,
  titleColor = color
}) => {
  const Icon = icons[icon]

  return (
    <Box
      align="center"
      background={background}
      direction="row"
      gap="medium"
      justify="between"
      margin="small"
      pad="medium"
      round="large"
      style={{ boxShadow: buildShadow(shadowSize, shadowType) }}
    >
      {indicator && (
        <Box>
          <Box
            style={{ backgroundColor: colors[color] }}
            height="8px"
            round="full"
            width="8px"
          />
        </Box>
      )}
      <Box align="start" margin={{ right: 'medium' }}>
        <Text size="16px" style={{ color: colors[titleColor] }} weight="bold">
          {title}
        </Text>
        <Heading
          color="dark-2"
          level="5"
          margin={{ bottom: 'none', top: 'xsmall' }}
          style={{ fontSize: '1.25rem' }}
        >
          {data}
        </Heading>
      </Box>
      {icon && (
        <Box>
          <Box
            align="center"
            height="42px"
            justify="center"
            round="full"
            style={{ backgroundColor: colors[color] }}
            width="42px"
          >
            <Icon color="white" size="28px" />
          </Box>
        </Box>
      )}
    </Box>
  )
}

Pill.propTypes = propTypes

Pill.defaultProps = defaultProps

export default Pill
