// @flow
/**
 *
 * Popup
 *
 */
import classnames from 'classnames';
import React from 'react';
import Cross from '../Icon/Cross';
import LoadingSpinner from '../Loading/LoadingSpinner';
import styles from './PopUp.scss';

type Props = {
  children: any,
  className?: string,
  modal?: boolean,
  onClose?: Function,
  onOpen?: Function,
  showing?: boolean,
  noPadding?: boolean,
  style?: Object,
};

const noOp = () => null;

class PopUp extends React.Component<Props, *> {
  static defaultProps = {
    modal: false,
    noPadding: false,
    onClose: noOp,
    onOpen: noOp,
    showing: false,
  };

  state = {
    showing: this.props.showing,
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.showing !== this.state.showing) {
      this.setState({
        showing: nextProps.showing,
      });
      if (nextProps.showing && this.props.onOpen) {
        this.props.onOpen();
      }
    }
  }

  handleClose = () => {
    if (!this.props.modal) {
      this.setState({
        showing: false,
      });
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  };

  render() {
    const {
      children,
      className,
      modal,
      onClose,
      onOpen,
      showing,
      noPadding,
      style,
      ...restProps
    } = this.props;
    const classes = classnames(styles.outer, {
      [styles.showing]: this.state.showing,
    });
    const popupClasses = classnames(styles.popup, className, {
      [styles.popupWithPadding]: !noPadding,
    });

    return (
      <div className={classes} {...restProps}>
        <div className={styles.overlay} onClick={this.handleClose} />
        <div className={popupClasses} style={style}>
          {!modal && (
            <Cross className={styles.close} onClick={this.handleClose} />
          )}
          {children || <LoadingSpinner />}
        </div>
      </div>
    );
  }
}

export default PopUp;
