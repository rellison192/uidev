import React from 'react'
import ReactDom from 'react-dom/client'
import Popular from './components/Popular'
import Battle from './components/battle/Battle'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="light">
        <div className="container">
          <Battle />
        </div>
      </div>
    )
  }
}
const root = ReactDom.createRoot(document.getElementById('app'))
root.render(<App />)
 