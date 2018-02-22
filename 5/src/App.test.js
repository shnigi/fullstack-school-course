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
      // console.log('contentDiv', app.debug());
      const length = contentDiv.length;
      expect(length).toBe(0)
    })
  })

  describe('when user logs in', () => {
    const user = {
      username: 'keijo',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtlaWpvIiwiaWQiOiI1YTdjYzE1OGI2Mzc2NzM4MjBlNDAzNjEiLCJpYXQiOjE1MTkzMDMxNTJ9.RfpjQpMCoadG487mDS20ACqLbZDM90ARWBXXGIFH-3',
      password: 'salis'
    }

    beforeEach(() => {
      app = mount(<App />)
      localStorage.setItem('loggedInUser', JSON.stringify(user))
    })

    it('blogs are rendered', () => {
      app.update()
      console.log('Onko kirjautnut', window.localStorage.getItem('loggedInUser'));
      console.log('softa', app.debug());

    })
  })

})
