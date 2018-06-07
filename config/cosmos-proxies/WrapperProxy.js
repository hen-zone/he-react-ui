import createRouterProxy from 'react-cosmos-router-proxy';

import React from 'react';
import PropTypes from 'prop-types';

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

