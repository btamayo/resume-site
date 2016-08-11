import React from 'react'
import TitleBlock from '../TitleBlock'
import TechItem from '../TechItem'

export default React.createClass({
  propTypes: {
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string
  },
  render: function() {
    return (
      <div className='col-md-12 review'>
        <div className='section group'>
          <div className='col span_8_of_11 review-body' style={{ paddingRight: 20 }}>
            <TitleBlock title={ this.props.company }
                        subtitle={ this.props.position }
                        link={ this.props.link }
                        duration={ `${ this.props.startDate} - ${ this.props.endDate}` } />
            <div className='review-text' style={{ padding: '15px 0px' }}>
              {/* Summary*/}
              { this.props.summary }
            </div>
            <div className='review-text' style={{ padding: '10px 0px' }}>
              <ul>
                { this.props.highlights.map( (item, key) => (
                    <li key={ key }>{item}</li>
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
            { this.props.technologies.extra &&
                <div className='other subtitle'>{ this.props.technologies.extra.join(', ') }</div>
            }
          </div>
        </div>
      </div>
    )
  }
})