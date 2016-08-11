import React from 'react'
import ReactDOM from 'react-dom'
import Main from './app/Main'
import resume from './public/bianca-tamayo-07-2016'

ReactDOM.render(<Main initialResume={ resume } />, document.getElementById('app'))