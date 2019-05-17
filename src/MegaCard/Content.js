import React from 'react'
import { Box, Heading, Text } from 'grommet'
import { colors, propTypes } from '../constants'

const Content = ({ data, title, titleColor }) => {
  return (
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
  )
}

Content.propTypes = {
  data: propTypes.data,
  title: propTypes.title,
  titleColor: propTypes.titleColor
}

export default Content
