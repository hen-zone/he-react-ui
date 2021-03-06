import React from 'react'
import PropTypes from 'prop-types'

export default function Help (props) {
  const {className, ...restProps} = props

  return (
    <svg className={className}{...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(1.000000, 1.000000)">
        <path d="M 11,-1 C 4.3844276,-1 -1,4.3844276 -1,11 -1,17.615572 4.3844276,23 11,23 17.615572,23 23,17.615572 23,11 23,4.3844276 17.615572,-1 11,-1 Z m 0,2 C 16.534692,1 21,5.4653079 21,11 21,16.534692 16.534692,21 11,21 5.4653079,21 1,16.534692 1,11 1,5.4653079 5.4653079,1 11,1 Z" />
        <path d="M 11,5 C 9.3073959,5 7.906242,6.1140807 7.2910156,7.5195312 A 1.0009847,1.0009847 0 1 0 9.125,8.3222656 C 9.4097736,7.6717161 10.304604,7 11,7 c 1.032659,0 2,0.9673414 2,2 0,1.032659 -0.967341,2 -2,2 a 1.0001,1.0001 0 0 0 -1,1 v 2 a 1.0001,1.0001 0 1 0 2,0 V 12.794922 C 13.700153,12.334832 15,10.832206 15,9 15,6.8146586 13.185341,5 11,5 Z" />
        <path d="m 12,17 a 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 1,1 0 0 1 1,1 z" />
      </g>
    </svg>
  )
}

Help.propTypes = {
  className: PropTypes.string
}
