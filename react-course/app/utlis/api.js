const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const params = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export function fetchPopularRepos(language) {
  const endpoint = encodeURI(
    `https://api.github.com/search/repositories${params}&q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message)
      }
      return data.items
    })
}

function getErrorMsg(message, username) {
  if (message === 'Not Found') {
    return `${username} does not exist`
  }
  return message
}

function getProfile(username) {
  return fetch(`https://api.github.com/users/${username}${params}`)
    .then((response) => response.json())
    .then((profile) => {
      if (profile.message) {
        throw new Error(getErrorMsg(profile.message, username))
      }
      return profile
    })
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
    .then((response) => response.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(getErrorMsg(repos.message, username))
      }
      return repos
    })
}

function getStarCount(repos) {
  return repos.reduce((count, { stargazers_count }) => {
    return (count += stargazers_count)
  }, 0)
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos)
}

function getUserData(username) {
  return Promise.all([getRepos(username), getProfile(username)]).then(
    ([repos, profile]) => ({
      profile,
      score: calculateScore(profile.followers, repos),
    })
  )
}

function sortPlayers(players) {
  return players.sort((a, b) => (a.score < b.score ? 1 : -1))
}

export function battle(players) {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    sortPlayers
  )
}
