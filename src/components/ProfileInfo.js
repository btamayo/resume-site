import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <div className='name-title-block'>
        <div className='name'>
          { this.props.name }
        </div>
        <div className='title'>{this.props.title}</div>
        <div className='medium-grey' style={{ paddingTop: 10 }}>
          <a href={ `mailto:${this.props.email}` }>
            { this.props.email }
          </a>
        </div>
        <div className='medium-grey' style={{ paddingTop: 5 }}>
          { this.props.location.city }, { this.props.location.region }
        </div>
      </div>
    )
  }
})