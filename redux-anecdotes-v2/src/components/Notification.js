import React from 'react'

class Notification extends React.Component {
  render() {
    const notification = this.props.store.getState().notification
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
      display: notification ? 'block' : 'none'
    }
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}

export default Notification
