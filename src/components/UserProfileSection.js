import React from 'react'
import classNames from 'classnames'

export default React.createClass({
  render: function() {
    let sectionColClass = classNames('col-md-12', this.props.className)
    return (
      <div className='user-profile-section' style={{ backgroundColor: 'white' }}>
        <div className='row'>
          <div className={ sectionColClass }>
            { this.props.children }
          </div>
          {/* Spacer */}
        </div>
      </div>
    )
  }
})