import React from 'react'

import LoadingScreen from '../LoadingScreen'
import HealthEngine from '../../../Icon/HealthEngine'
import style from './style.scss'

export default {
  component: LoadingScreen,
  props: { children: <HealthEngine className={style.loadingIcon} /> }
}
