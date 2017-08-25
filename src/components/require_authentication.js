import React, { Component } from 'react';
import { connect } from 'react-redux';

// single argument that is the component we want to wrap
export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      // console.log('Rendering', ComposedComponent);
      console.log(this.props.authenticated);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
