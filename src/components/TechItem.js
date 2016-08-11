import React from 'react'
import { ProgressBar } from 'react-bootstrap'

export default React.createClass({
  render: function() {
    return (
      <div className='section group'>
        <div className='col span_3_of_7'>
          <div className='subtitle'>
            <b>{ this.props.name }</b>
          </div>
        </div>
        <div className='col span_4_of_7' style={{ paddingLeft: 5 }} >
          <ProgressBar now={ this.props.relevance } />
        </div>
      </div>
    )
  }
})