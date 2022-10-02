import React from 'react'
import { hastag } from '../icons'

export default function TableHead() {
  return (
    <thead>
      <tr>
        <th style={{ width: '5%' }}>{hastag}</th>
        <th style={{ width: '50%' }}>Repositories</th>
        <th style={{ width: '15%' }}>Stars</th>
        <th style={{ width: '15%' }}>Forks</th>
        <th style={{ width: '15%' }}>Open Issues</th>
      </tr>
    </thead>
  )
}
