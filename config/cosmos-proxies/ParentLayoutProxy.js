import PropTypes from 'prop-types';
import React from 'react';

export default class ParentLayoutProxy extends React.Component {
  static propTypes = {
    nextProxy: PropTypes.object,
    fixture: PropTypes.object,
  };

  render() {
    const { nextProxy, fixture, ...nextProps } = this.props;
    const { parentLayout } = fixture;

    const child = (
      <nextProxy.value
        {...nextProps}
        nextProxy={nextProxy.next()}
        fixture={fixture}
      />
    );

    return parentLayout ? <div style={parentLayout}>{child}</div> : child;
  }
}
