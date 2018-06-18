import PropTypes from 'prop-types';
import React from 'react';

export default class WrapperProxy extends React.Component {
  static propTypes = {
    nextProxy: PropTypes.object,
    fixture: PropTypes.object,
  };

  render() {
    const { nextProxy, fixture, ...nextProps } = this.props;
    const { wrapper } = fixture;

    const child = (
      <nextProxy.value
        {...nextProps}
        nextProxy={nextProxy.next()}
        fixture={fixture}
      />
    );

    if (!wrapper) return child;

    const { tag: Component = 'div', ...props } = wrapper;

    return <Component {...props}>{child}</Component>;
  }
}
