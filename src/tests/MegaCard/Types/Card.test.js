import React from 'react'
import Card from '../../../MegaCard/Types/Card'
import { shallow } from 'enzyme'

const defaultProps = {
  data: 'Test Data',
  title: 'Title',
  type: 'card'
}

describe('<Card />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Card /> component.', () => {
    const component = shallow(<Card {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
