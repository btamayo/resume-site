import React from 'react'
import UserProfileSection from '../components/UserProfileSection'
import SectionHeader from '../components/SectionHeader'

export default React.createClass({
  render: function() {
    return (
      <div>
        <UserProfileSection>
          <SectionHeader title='Education' leftColClass='col-md-4' rightColClass='col-md-8 right-header'>
            {/* @TODO: If !endDate, but startDate, do: `startDate - Present` OR add expected graduation date */}
            { this.props.degreeType } in { this.props.area }, { this.props.endDate }
            <br />
            <b>{ this.props.institution }</b>
          </SectionHeader>

          {/* @TODO: What I'm confused about here is that it seems like I'm writing this render() as if I know
            where { this.props.children } will be in UserProfileSectionContainer and it feels like too much coupling.
            Same situation with SectionHeader, where the { this.props.children } renders on the right col. Are there better design patterns for this? */}

          <div className='row'>
            <div className='col-md-12'>
              <b>Relevant Courses:</b>&nbsp;
              { this.props.courses.join(', ') }
            </div>
          </div>
        </UserProfileSection>
      </div>
    )
  }
})