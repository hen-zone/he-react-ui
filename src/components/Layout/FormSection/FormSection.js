import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoadingSpinner from '../../Loading/LoadingSpinner';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import style from './FormSection.scss';

class FormSection extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
  };

  render() {
    const { children, description, heading, ...restProps } = this.props;

    return (
      <div className={style.outer} {...restProps}>
        <div className={style.left}>
          <Heading h3>{heading}</Heading>
          <Paragraph>{description}</Paragraph>
        </div>
        <div className={style.right}>{children || <LoadingSpinner />}</div>
      </div>
    );
  }
}

export default FormSection;
