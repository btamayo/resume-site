import React from 'react'

import Header from './Header'
import Activities from './Activities'
import Bio from './Bio'
import Education from './Education'
import Experience from './Experience'
import JSONInput from './JSONInput'
import Projects from './Projects'
import Skills from './Skills'

const contentWrapperStyle = {
  paddingTop: 50
}

const contentStyle = {
  padding: 25,
  margin: '0 auto'
}

export default React.createClass({
  resetResume: function() {
    this.setState(this.getInitialState())
  },
  getInitialState: function() {
    return {
      resume: this.props.initialResume
    }
  },
  updateResume: function(response) {
    this.setState({ resume: response })
  },
  render: function() {
    // @TODO: Not sure about this arbitrary bootstrap nesting style?
    return (
      <div className='content-wrapper' style={ contentWrapperStyle }>
        <div className='content' style={ contentStyle }>
          <div className='row'>
            <div className='main-content-wrapper col-md-12'>
              {/* Three rows for main sections */}
              <div className='row'>
                <Header { ...this.state.resume.basics } links={ this.state.resume.links } />
              </div>
              {/* Spacer */}
              <div className='row'>
                <div className='col-md-12'>
                  &nbsp;
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <Bio data={ this.state.resume.basics } />

                  {/* @TODO: Make this accept more than one Education */}
                  <Education { ...this.state.resume.education[0] } />

                  {/* What's the convention for just passing in a single array for the data? */}
                  <Skills data = { this.state.resume.skills } />
                  <Experience data={ this.state.resume.work } />
                  <Projects data={ this.state.resume.projects } />
                  {
                    this.state.resume.activities && <Activities data={ this.state.resume.activities } />
                  }
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: 25, color: 'grey' }} >
          <center>
            <span style={{ fontSize: 11 }} >
              Last Modified: { this.state.resume.lastModified }
            </span>
          </center>
          <JSONInput initialValue={ JSON.stringify(this.props.initialResume) } onChangeHandler={ this.updateResume } onReset={ this.resetResume } />
          </div>
        </div>
      </div>
    )
  }
})