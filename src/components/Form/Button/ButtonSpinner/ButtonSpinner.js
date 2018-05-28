import React from 'react'
import style from './ButtonSpinner.scss'

export default class ButtonSpinner extends React.Component {
  render () {
    return (
      <svg
        className={style.spinner}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs>
          <path
            id="a"
            d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c-.007 6.624-5.376 11.993-12 12zm0-21.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c-.006-5.382-4.368-9.744-9.75-9.75z"
          />
          <path
            id="c"
            d="M24 12h-2.25c-.006-5.382-4.368-9.744-9.75-9.75V0c6.624.007 11.993 5.376 12 12z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g>
            <mask id="b" fill="#fff">
              <use xlinkHref="#a" />
            </mask>
            <g fill="#FFF" mask="url(#b)" opacity=".399">
              <path d="M0 0h24v24H0z" />
            </g>
          </g>
          <g>
            <mask id="d" fill="#fff">
              <use xlinkHref="#c" />
            </mask>
            <use fill="#9FB3BC" opacity=".4" xlinkHref="#c" />
            <g fill="#FFF" mask="url(#d)">
              <path d="M0 0h24v24H0z" />
            </g>
          </g>
        </g>
      </svg>
    )
  }
}
