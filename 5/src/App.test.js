import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'


describe('<App />', () => {
  let app

  describe('when user is not logged', () => {
    beforeEach(() => {
      app = mount(<App />)
    })

    it('only login form is rendered', () => {
      app.update()
      const contentDiv = app.find('.blogList')
      console.log('contentDiv', app.debug());
      const length = contentDiv.length;
      expect(length).toBe(0)
    })
  })

})
