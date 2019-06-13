import PropTypes from 'prop-types'
import * as grommetIcons from 'grommet-icons'

export const icons = grommetIcons

export const propTypes = {
  background: PropTypes.string,
  color: PropTypes.oneOf([
    'blue',
    'dark',
    'gray',
    'grey',
    'green',
    'red',
    'violet'
  ]),
  data: PropTypes.any.isRequired,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  indicator: PropTypes.bool,
  shadowSize: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  shadowType: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  type: PropTypes.oneOf(['card', 'pill'])
}

export const defaultProps = {
  background: 'white',
  color: 'blue',
  icon: 'Info',
  indicator: true,
  shadowSize: 'small',
  shadowType: 'dark'
}

export const colors = {
  blue: '#4c84ff',
  dark: '#343a40',
  gray: '#f8f9fa',
  grey: '#f8f9fa',
  green: '#7cf29c',
  red: '#f0404c',
  violet: '#d372b6'
}

const shades = {
  dark: 'rgba(0,0,0,0.20)',
  light: 'rgba(255, 255, 0.4)'
}

const sizes = {
  xsmall: '0px 1px 2px',
  small: '0px 2px 4px',
  medium: '0px 4px 8px',
  large: '0px 8px 16px',
  xlarge: '0px 12px 24px'
}

export const buildShadow = (shadowSize, shadowType) =>
  `${shades[shadowType]} ${sizes[shadowSize]}`
