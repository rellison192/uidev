import React from 'react'
import PropTypes from 'prop-types'

export default function MoreInfo({
  created_at,
  forks_count,
  language,
  updated_at,
  watchers,
  login,
  type
}) {
  return (
    <ul className="tooltip stack">
      <li className="split">
        <span>By:</span>
        <span>{login}</span>
      </li>
      {language && (
        <li className="split">
          <span>Language:</span>
          <span>{language}</span>
        </li>
      )}
      <li className="split">
        <span>Created:</span>{' '}
        <span> {new Date(created_at).toLocaleString()}</span>
      </li>
      <li className="split">
        <span>Updated:</span>{' '}
        <span>{new Date(updated_at).toLocaleString()}</span>
      </li>
      <li className="split">
        <span>Watchers:</span>
        <span>{watchers.toLocaleString()}</span>
      </li>

      {forks_count && (
        <li className="split">
          <span>Forked: </span>
          <span>{forks_count.toLocaleString()}</span>
        </li>
      )}
      <li className="split">
        <span>Type:</span>
        <span>{type}</span>
      </li>
    </ul>
  )
}
MoreInfo.propTypes = {
  created_at: PropTypes.string.isRequired,
  language: PropTypes.string,
  updated_at: PropTypes.string.isRequired,
  watchers: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  forks_count: PropTypes.number
}
