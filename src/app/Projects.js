import React from 'react'
import SectionHeader from '../components/SectionHeader'
import UserProfileSection from '../components/UserProfileSection'
import Project from '../components/Project'

export default React.createClass({
  render: function() {
    return (
      <div>
        <UserProfileSection>
          <SectionHeader title='Projects' />
          <div className='row'>
            { this.props.data.map( (item, key) => (
                <Project key={ key } { ...item } />
              )) }
          </div>
        </UserProfileSection>
      </div>
    )
  }
})