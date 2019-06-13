import React from 'react'
import Indicator from '../../MegaCard/Indicator'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<Indicator />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Indicator /> component.', () => {
    const component = shallow(<Indicator {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
