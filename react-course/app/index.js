import React from 'react'
import ReactDom from 'react-dom/client'
import Nav from './components/Nav'
import Loading from './components/loading/Loading'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

const Popular = React.lazy(() => import('./components/popular/Popular'))
const Battle = React.lazy(() => import('./components/battle/Battle'))
const Results = React.lazy(() => import('./components/battle/Results'))

class App extends React.Component {
  state = {
    theme: 'light',
  }
  toggleTheme = () => {
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
            <React.Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Popular />} />
                <Route path="/battle" element={<Battle />} />
                <Route path="/results" element={<Results />} />
              </Routes>
            </React.Suspense>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
const root = ReactDom.createRoot(document.getElementById('app'))
root.render(<App />)
