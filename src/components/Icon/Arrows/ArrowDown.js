import React from 'react'
import PropTypes from 'prop-types'

export default function ArrowDown (props) {
  const {className, ...restProps} = props

  return (
    <svg className={className} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(22.000000, 2.000000) rotate(90.000000)">
        <path d="M13.5857864,11 L-2,11 C-2.55228475,11 -3,10.5522847 -3,10 C-3,9.44771525 -2.55228475,9 -2,9 L13.5857864,9 L9.29289322,4.70710678 C8.90236893,4.31658249 8.90236893,3.68341751 9.29289322,3.29289322 C9.68341751,2.90236893 10.3165825,2.90236893 10.7071068,3.29289322 L16.7071068,9.29289322 C17.0976311,9.68341751 17.0976311,10.3165825 16.7071068,10.7071068 L10.7071068,16.7071068 C10.3165825,17.0976311 9.68341751,17.0976311 9.29289322,16.7071068 C8.90236893,16.3165825 8.90236893,15.6834175 9.29289322,15.2928932 L13.5857864,11 Z" />
      </g>
    </svg>
  )
}

ArrowDown.propTypes = {
  className: PropTypes.string
}
