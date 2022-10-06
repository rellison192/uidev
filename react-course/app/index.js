import React from 'react'
import ReactDom from 'react-dom/client'
import Popular from './components/Popular'
import Battle from './components/battle/Battle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="light">
          <div className="container">
            <Routes>
              <Route path="/" element={<Popular />} />
              <Route path="/battle" element={<Battle />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
const root = ReactDom.createRoot(document.getElementById('app'))
root.render(<App />)
