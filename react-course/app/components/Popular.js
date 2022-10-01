import React from 'react'

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
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <main>
        <select
          value={this.state.selectedLanguage}
          onChange={(event) => this.updateLanguage(event.target.value)}
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        {JSON.stringify(this.state, null, 2)}
      </main>
    )
  }
}
