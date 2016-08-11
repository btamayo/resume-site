import React from 'react'
import UserProfileSection from '../components/UserProfileSection'
import SectionHeader from '../components/SectionHeader'

// @TODO: Right now skillsCol only expects 4-column

var SkillsCol = React.createClass({
  propTypes: {
    header: React.PropTypes.string.isRequired
  },
  getDefaultProps() {
    return {
      header: ''
    }
  },
  render: function() {
    return (
      <div className='col span_1_of_4'>
        <div className='header'>
          { this.props.header }
        </div>
        { this.props.items.map(function(item, k) {
          return <span key={ k }>{item}<br /></span>
        }) }
      </div>
    )
  }
})

export default React.createClass({
  render: function() {
    return (
      <UserProfileSection>
        <SectionHeader title='Skills' />
        <div className='section group skills center'>
          { this.props.data.map((item, key) => (
             <SkillsCol key={ key } header={ item.category } items={ item.items } />
          ))}
        </div>
      </UserProfileSection>
    )
  }
})