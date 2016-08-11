import React from 'react'
import NavLink from '../components/NavLink'

export default React.createClass({
  render: function() {
    return (
      <div className="row info-blocks-container">
        { this.props.links.map( (link, key) => (
          <NavLink key={ key } title={ link.title } location={ link.location } />
        )) }
      </div>
    )
  }
})

