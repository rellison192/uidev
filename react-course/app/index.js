import React from 'react'
import ReactDom from 'react-dom/client'
import Popular from './components/Popular'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="Light">
        <div className="container">
          <Popular />
        </div>
      </div>
    )
  }
}
const root = ReactDom.createRoot(document.getElementById('app'))
root.render(<App />)
