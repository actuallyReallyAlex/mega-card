import React from 'react'
import MegaCard from '../index'
import { shallow } from 'enzyme'

const defaultProps = {
  data: 'Test Data',
  title: 'Title'
}

describe('<MegaCard />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <MegaCard /> component as a card.', () => {
    const component = shallow(<MegaCard {...defaultProps} type="card" />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <MegaCard /> component as a pill.', () => {
    const component = shallow(<MegaCard {...defaultProps} type="pill" />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <MegaCard /> component as default.', () => {
    const component = shallow(<MegaCard {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
