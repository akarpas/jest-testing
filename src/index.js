import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'

import App from './components/App'

const store = createStore(reducers, {})

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
)