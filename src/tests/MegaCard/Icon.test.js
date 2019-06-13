import React from 'react'
import Icon from '../../MegaCard/Icon'
import { shallow } from 'enzyme'

const defaultProps = {
  color: 'blue',
  icon: 'Cube'
}

describe('<Icon />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Icon /> component.', () => {
    const component = shallow(<Icon {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
