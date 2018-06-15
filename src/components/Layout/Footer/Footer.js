// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './Footer.scss';

class Footer extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children, ...restProps } = this.props;

    return (
      <div className={style.footer} {...restProps}>
        {children}
      </div>
    );
  }
}

export default Footer;
