import React from 'react'
import SectionHeader from '../components/SectionHeader'
import UserProfileSection from '../components/UserProfileSection'
import Job from '../components/Job'

export default React.createClass({
  render: function() {
    return (
      <div>
        <UserProfileSection>
          <SectionHeader title='Experience' />
          <div className='row'>
            { this.props.data.map( (item, key) => (
                <Job key={ key } { ...item } />
              )) }
          </div>
        </UserProfileSection>
      </div>
    )
  }
})