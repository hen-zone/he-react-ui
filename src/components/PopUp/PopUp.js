/**
 *
 * Popup
 *
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import LoadingSpinner from '../Loading/LoadingSpinner';
import styles from './PopUp.scss';

class PopUp extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    modal: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    showing: PropTypes.bool,
    noPadding: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    modal: false,
    noPadding: false,
    onClose: () => null,
    onOpen: () => null,
    showing: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      showing: props.showing,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showing !== this.state.showing) {
      this.setState({
        showing: nextProps.showing,
      });
      if (nextProps.showing) {
        this.props.onOpen();
      }
    }
  }

  handleClose = () => {
    if (!this.props.modal) {
      this.setState({
        showing: false,
      });
      this.props.onClose();
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
            <Icon
              className={styles.close}
              name="Cross"
              onClick={this.handleClose}
            />
          )}
          {children || <LoadingSpinner />}
        </div>
      </div>
    );
  }
}

export default PopUp;
