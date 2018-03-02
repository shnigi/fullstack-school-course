import React from 'react'

class Filter extends React.Component {
  handleChange = (event) => {
    console.log('event', event.target.value);
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Filter
