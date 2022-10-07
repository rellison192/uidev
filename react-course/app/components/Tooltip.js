import React from 'react'
import PropTypes from 'prop-types'
import Hover from './Hover'

export default function Tooltip({ children, element }) {
  return (
    <Hover>
      {(hovering) => {
        return (
          <>
            {hovering === true && element}
            {children}
          </>
        )
      }}
    </Hover>
  )
}
Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.node.isRequired,
}
