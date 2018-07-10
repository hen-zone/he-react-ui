// @flow
/**
 *
 * VideoDisplay
 *
 */
import React from 'react';
import YouTube from 'react-youtube';
import styles from './VideoDisplay.scss';

type Props = {
  children: any,
  youtubeId: string,
};

function VideoDisplay(props: Props) {
  const { children, youtubeId } = props;
  const opts = {
    playerVars: {
      color: 'white',
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className={styles.outer}>
      <div className={styles.videoWrapper}>
        <YouTube className={styles.youtube} videoId={youtubeId} opts={opts} />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default VideoDisplay;
