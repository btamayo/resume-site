import React from 'react'

export default React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Google',
      location: 'http://www.google.com'
    }
  },
  render: function() {
    return (
      <div className='col-xs-6 col-md-3 info-block'>
        <div className='subtitle'>
          { this.props.location && this.props.location.length > 0 &&
            <a href={ this.props.location }>{ this.props.title }</a> }
          { (!this.props.location || this.props.location.length <= 0) &&
            <span style={{ color: '#656565' }}>{ this.props.title }</span> }
        </div>
      </div>
    )
  }
})