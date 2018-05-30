import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { icon } from './Icon.scss'

export default function DropDown (props) {
  const {className, ...restProps} = props

  return (
    <svg className={classNames(className, icon)} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(15.000000, 7.000000) rotate(90.000000)">
        <path d="M2,6.93247919 L2,-0.932479194 C2,-1.20862157 2.22385763,-1.43247919 2.5,-1.43247919 C2.61696825,-1.43247919 2.7302347,-1.39147108 2.8200922,-1.31658983 L7.53906723,2.61588936 C7.75120568,2.7926714 7.77986771,3.10795375 7.60308567,3.3200922 C7.58372606,3.34332373 7.56229876,3.36475103 7.53906723,3.38411064 L2.8200922,7.31658983 C2.60795375,7.49337187 2.2926714,7.46470984 2.11588936,7.25257139 C2.04100811,7.16271389 2,7.04944745 2,6.93247919 Z" />
      </g>
    </svg>
  )
}

DropDown.propTypes = {
  className: PropTypes.string
}
