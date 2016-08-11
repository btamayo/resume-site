import React from 'react'
import Remarkable from 'remarkable'
import SectionHeader from '../components/SectionHeader'
import UserProfileSection from '../components/UserProfileSection'

export default React.createClass({
  rawMarkup: function(text) {
    var md = new Remarkable()
    return { __html: md.render(text) }
  },
  render: function() {
    return (
      <div>
        <UserProfileSection>
          <SectionHeader title='Activities' />
          <ul>
          { this.props.data.map( (item, key) => (
              <li key={ key } dangerouslySetInnerHTML={ this.rawMarkup(item) } />
            )) }
          </ul>
        </UserProfileSection>
      </div>
    )
  }
})