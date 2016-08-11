import React from 'react'

import TechItem from '../TechItem'
import TitleBlock from '../TitleBlock'

export default React.createClass({
  propTypes: {
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string
  },
  formatProjectDate: function(startDate, endDate) {
    // @TODO: Is there a better way to do this or write this?
    if (!startDate && !endDate) {
      return null
    } else if (!startDate) {
      return endDate
    } else if (!endDate) {
      return startDate
    }

    let _start = startDate.trim().toUpperCase()
    let _end = endDate.trim().toUpperCase()

    if (_start === _end) {
      return startDate
    } else {
      return `${startDate} - ${endDate}`
    }
  },
  render: function() {
    return (
      <div className='col-md-12 review'>
        <div className='section group'>
          <div className='col span_8_of_11 review-body' style={{ paddingRight: 20 }}>
            <div className='section group'>
              <TitleBlock title={ this.props.title }
                          link={ this.props.link }
                          duration={ this.formatProjectDate(this.props.startDate, this.props.endDate) } />
            </div>
            <div className='review-text' style={{ padding: '15px 0px' }}>
              {/* Summary*/}
              { this.props.description }
            </div>
            <div className='review-text' style={{ padding: '10px 0px' }}>
              <ul>
                { this.props.highlights.map( (item, key) => (
                    <li key={ key }> {item} </li>
                  )) }
              </ul>
            </div>
          </div>
          <div className='col span_3_of_11' style={{ padding: '10px 0px' }}>
            <div className='medium-grey' style={{ marginBottom: 10 }}>Technologies used</div>
            { this.props.technologies.main.map( (item, key) => (
                <TechItem { ...item } key={ key } />
              )) }
            <div className='medium-grey' style={{ marginBottom: 10 }}>Other</div>
            <div className='other subtitle'>{ this.props.technologies.extra.join(', ') }</div>
          </div>
        </div>
      </div>
    )
  }
})