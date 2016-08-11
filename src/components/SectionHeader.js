import React from 'react'
import classNames from 'classnames'

export default React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Section',
      leftColClass: 'col-md-6',
      rightColClass: 'col-md-6 right-header'
    }
  },
  render: function() {
    let rightColClass = classNames('right-header', this.props.rightColClass)

    return (
      <div>
        <div className='row'>
          <div className={ this.props.leftColClass }>
            <h3>
              { this.props.title }
            </h3>
          </div>
          <div className={ rightColClass }>
            { this.props.children }
          </div>
        </div>
        <hr />
      </div>
    )
  }
})