import React from 'react'
import ReactDom from 'react-dom/client'
import Popular from './components/popular/Popular'
import Battle from './components/battle/Battle'
import Nav from './components/Nav'
import Results from './components/battle/Results'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  toggleTheme() {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }))
  }
  render() {

    return (
      <BrowserRouter>
        <div className={this.state.theme}>
          <div className="container">
            <Nav theme={this.state.theme} toggleTheme={this.toggleTheme} />
            <Routes>
              <Route path="/" element={<Popular />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
const root = ReactDom.createRoot(document.getElementById('app'))
root.render(<App />)
