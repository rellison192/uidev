import React from 'react'
import Nav from './Nav'
export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All',
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage })
  }
  render() {
    return (
      <main>
        <Nav
          selected={this.state.selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {JSON.stringify(this.state, null, 2)}
      </main>
    )
  }
}
