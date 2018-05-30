import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { icon } from '../Icon.scss'

export default function ChevronDown (props) {
  const {className, ...restProps} = props

  return (
    <svg className={classNames(className, icon)} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(17.000000, 9.000000) rotate(90.000000)">
        <path d="M0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L5.70710678,4.29289322 C6.09763107,4.68341751 6.09763107,5.31658249 5.70710678,5.70710678 L1.70710678,9.70710678 C1.31658249,10.0976311 0.683417511,10.0976311 0.292893219,9.70710678 C-0.0976310729,9.31658249 -0.0976310729,8.68341751 0.292893219,8.29289322 L3.58578644,5 L0.292893219,1.70710678 Z" />
      </g>
    </svg>
  )
}

ChevronDown.propTypes = {
  className: PropTypes.string
}
