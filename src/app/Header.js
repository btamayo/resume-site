import React from 'react'
import ProfilePicture from '../components/ProfilePicture'
import ProfileInfo from '../components/ProfileInfo'
import NavLinks from './NavLinks'

const userProfileHeaderStyle = {
  backgroundColor: 'white'
}

const noPaddingStyle = {
  padding: 0
}

export default React.createClass({
  render: function() {
    return (
      <div className='col-md-12'>
        <div className='user-profile-header' style={ userProfileHeaderStyle }>
          <div className='row'>
            <div className='col-md-12' style={ noPaddingStyle }>
              <ProfilePicture content={ this.props.picture } />
              <ProfileInfo name= { this.props.name }
                           email={ this.props.email }
                           title={ this.props.label }
                           location={ this.props.location } />
            </div>
          </div>
          <div className='row'>
            <hr />
            { this.props.links &&
              <NavLinks links = { this.props.links } /> }
          </div>
        </div>
      </div>
    )
  }
})