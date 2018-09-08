import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'

it('shows a comment box and a comment list', () => {
  const wrapped = shallow(<App/>)

  expect(wrapped.find(CommentBox).length).toEqual(1)
})