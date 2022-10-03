import React from 'react'
import PropTypes from 'prop-types'
import { close } from '../icons'

export default function PlayerPreview({ username, onReset, label }) {
  return (
    <article className="card">
      <h4 className="player-label">{label}</h4>
      <div className="split">
        <div className="row gap-md">
          <img
            width={32}
            height={32}
            className="avatar"
            src={`https://github.com/${username}.png?size=200`}
            alt={`Avatar for ${username}`}
          />
          <a href={`https://github.com/${username}`}>{username}</a>
          <button onClick={onReset} className="btin secondary icon">
            {close}
          </button>
        </div>
      </div>
    </article>
  )
}
PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}
