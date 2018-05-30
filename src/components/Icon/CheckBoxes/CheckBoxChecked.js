import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { icon } from '../Icon.scss'

export default function CheckBoxChecked (props) {
  const {className, ...restProps} = props

  return (
    <svg className={classNames(className, icon)} {...restProps} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 0.04L18.72 0.08L18.92 0.14L19.11 0.22L19.28 0.32L19.43 0.44L19.56 0.57L19.68 0.72L19.78 0.89L19.86 1.08L19.92 1.28L19.96 1.5L19.99 1.74L20 2L20 18L19.99 18.26L19.96 18.5L19.92 18.72L19.86 18.92L19.78 19.11L19.68 19.28L19.56 19.43L19.43 19.56L19.28 19.68L19.11 19.78L18.92 19.86L18.72 19.92L18.5 19.96L18.26 19.99L18 20L2 20L1.74 19.99L1.5 19.96L1.28 19.92L1.08 19.86L0.89 19.78L0.72 19.68L0.57 19.56L0.44 19.43L0.32 19.28L0.22 19.11L0.14 18.92L0.08 18.72L0.04 18.5L0.01 18.26L0 18L0 2L0.01 1.74L0.04 1.5L0.08 1.28L0.14 1.08L0.22 0.89L0.32 0.72L0.44 0.57L0.57 0.44L0.72 0.32L0.89 0.22L1.08 0.14L1.28 0.08L1.5 0.04L1.74 0.01L2 0L18 0L18.26 0.01L18.5 0.04ZM5.91 8.73L4 10.64L8.64 15.27L16 7.91L14.09 6L8.64 11.45L5.91 8.73Z" />
    </svg>
  )
}

CheckBoxChecked.propTypes = {
  className: PropTypes.string
}
