import React from 'react'
import Pill from '../../../MegaCard/Types/Pill'
import { shallow } from 'enzyme'

const defaultProps = {
  data: 'Test Data',
  title: 'Title',
  type: 'pill'
}

describe('<Pill />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Pill /> component.', () => {
    const component = shallow(<Pill {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
