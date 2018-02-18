import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

const blog = {
  title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
  author: 'sneen',
  likes: 4,
  url: "google.com",
  id: 123123,
}

const user = {
  userId: 123123
}

describe('<Blog />', () => {
  it('after clicking name the details are not displayed', () => {
    const blogComponent = shallow(<Blog blog={blog} user={user}/>)
    // console.log('Component debug', blogComponent.debug())
    const contentDiv = blogComponent.find('.heading')
    const blogDetails = blogComponent.find('.blog-details')

    expect(contentDiv.text()).toContain(blog.title, blog.author)
    expect(blogDetails.getElement().props.style).toEqual({ display: 'none' })
  })

  it('after clicking the name, details are displayed', () => {
    const blogComponent = shallow(<Blog blog={blog} user={user}/>)
    const clickElement = blogComponent.find('.heading')
    clickElement.at(0).simulate('click')
    const clickedElement = blogComponent.find('.blog-details')

    // console.log('WADDAFAK', clickedElement.debug())

    expect(clickedElement.getElement().props.style).toEqual({ display: '' })
  })

})
