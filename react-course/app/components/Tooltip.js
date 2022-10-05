import React from 'react'
import PropTypes from 'prop-types'
import withHover from './withHover'

function Tooltip({ children, element, hovering }) {
  return (
    <>
      {hovering && element}
      {children}
    </>
  )
}
Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.node.isRequired,
}
export default withHover(Tooltip)
