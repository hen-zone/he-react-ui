// @flow
/**
 *
 * BenefitItem
 *
 */
import React from 'react';
import Tick from '../../Icon/Tick';
import styles from './BenefitItem.scss';

export default function BenefitItem(props: { children: any }) {
  const { children } = props;

  return (
    <div className={styles.outer}>
      <Tick className={styles.tick} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
