// @flow
/**
 *
 * ImageDisplay
 *
 */
import React from 'react';
import styles from './ImageDisplay.scss';

type Image = {
  src: string,
  alt: string,
};

type Props = {
  children: any,
  image: Image,
};

function ImageDisplay(props: Props) {
  const { children, image } = props;

  return (
    <div className={styles.outer}>
      <div className={styles.children}>{children}</div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}

export default ImageDisplay;
