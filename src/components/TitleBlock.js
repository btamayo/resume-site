import React from 'react'

export default React.createClass({
  render: function() {
    return (
      <div className='section group'>
        <div className='title-block'>
          <div className='title'>
            { (() => {
              if (this.props.link) {
                return <a href={ this.props.link }>{ this.props.title }</a>
              } else {
                return <span>{ this.props.title }</span>
              }
            })() }
            <div className='role' style={{ marginLeft: 10, fontWeight: 'normal', textTransform: 'none', color: '#777777', float: 'right' }}>{ this.props.duration }</div>
          </div>
          <div className='role'>{ this.props.subtitle }</div>
        </div>
      </div>
    )
  }
})