// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../Icon/Arrows/ArrowLeft';
import Heading from '../Heading';
import style from './BackView.scss';

function BackView(props: { heading: string, route: string }) {
  const { heading, route } = props;

  return (
    <div>
      <div className={style.barOuter}>
        <div className={style.barInner}>
          <Link to={route}>
            <Heading h1 nav className={style.heading}>
              <ArrowLeft className={style.arrow} />
              {heading}
            </Heading>
          </Link>
        </div>
      </div>
      <div className={style.contentPusher} />
    </div>
  );
}

export default BackView;
