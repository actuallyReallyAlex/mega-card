import React from 'react'
import { Box } from 'grommet'
import { buildShadow, defaultProps, propTypes } from '../../constants'
import Indicator from '../Indicator'
import Content from '../Content'
import Icon from '../Icon'

const Card = ({
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
      {indicator && <Indicator color={color} />}
      <Content data={data} title={title} titleColor={titleColor} />
      {icon && <Icon color={color} icon={icon} />}
    </Box>
  )
}

Card.propTypes = propTypes

Card.defaultProps = defaultProps

export default Card
