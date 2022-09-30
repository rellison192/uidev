import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

class App extends React.Component {
  render() {
    return <div>hello</div>
  }
}
const root = ReactDom.createRoot(document.getElementById('app'))
root.render(<App />)
