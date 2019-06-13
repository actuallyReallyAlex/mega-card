import React from 'react'
import Content from '../../MegaCard/Content'
import { shallow } from 'enzyme'

const defaultProps = {
  data: 'Test Data',
  title: 'Title'
}

describe('<Content />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Content /> component.', () => {
    const component = shallow(<Content {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
