import React from 'react'

var profilePictureStyle = {
  backgroundImage: 'url("../public/biancatamayo.jpg")',
  margin: '0 auto'
}

export default React.createClass({
  render: function() {
    return (
      <div className='user-avatar-lg' style={ profilePictureStyle }></div>
    )
  }
})