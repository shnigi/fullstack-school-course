import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders content', () => {
    const blog = {
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      author: 'sneen',
      likes: 4
    }

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    console.log('Component debug', blogComponent.debug())
    const contentDiv = blogComponent.find('.content')

    expect(contentDiv.text()).toContain(blog.title, blog.author)
  })
})
