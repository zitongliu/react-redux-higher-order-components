import React, { Component } from 'react';
import { connect } from 'react-redux';

// single argument that is the component we want to wrap
export default function(ComposedComponent) {

  class Authentication extends Component {
    // static keywords defines a class level property. static contextTypes = object gives any code inside our application ability to access for example Authentication.contextTypes

    // It is defined on the actual class not an instance of the class.
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    // will run whenever a component is about to be handed new set of props or when its about to be re-rendered
    componentWillUpdate(nextProps) {
      // nextProps represent the next set of props the component will be rendered with
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      // console.log('Rendering', ComposedComponent);
      // console.log(this.props.authenticated);
      // console.log(this.context);

      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
