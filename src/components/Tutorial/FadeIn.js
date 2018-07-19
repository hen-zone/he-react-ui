// @flow

import classnames from 'classnames';
import * as React from 'react';
import styles from './Tutorial.scss';

export default class FadeIn extends React.Component<*, *> {
  state = { mounted: false };

  componentWillMount() {
    requestAnimationFrame(() => {
      this.setState({ mounted: true });
    });
  }

  props: { children: any };

  render() {
    return (
      <div
        className={classnames(
          styles.fadeIn,
          this.state.mounted && styles.mounted,
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
