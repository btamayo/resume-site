import React from 'react'
import UserProfileSection from '../components/UserProfileSection'
import Remarkable from 'remarkable'

export default React.createClass({
  // @TODO: export to utils file
  rawMarkup: function(text) {
    var md = new Remarkable()
    return { __html: md.render(text) }
  },
  render: function() {
    return (
      <div>
        <UserProfileSection className='col-bio'>
          <div className='extended-bio center' dangerouslySetInnerHTML={ this.rawMarkup(this.props.data.summary) } />
        </UserProfileSection>
      </div>
    )
  }
})