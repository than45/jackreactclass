import React, { Component } from 'react';

function withLoading(ComponentToWrap) {
  return class extends Component {
    state = { loading: false };

    startLoading = () => this.setState({ loading: true });
    stopLoading = () => this.setState({ loading: false });

    render() {
      return (
        <ComponentToWrap
          {...this.props}
          loading={this.state.loading}
          startLoading={this.startLoading}
          stopLoading={this.stopLoading}
        />
      );
    }
  };
}

// Component to wrap
function MyComponent(props) {
  return (
    <div>
      {props.loading ? 'Loading...' : 'Loaded!'}
      <button onClick={props.startLoading}>Start Loading</button>
      <button onClick={props.stopLoading}>Stop Loading</button>
    </div>
  );
}

// Use the HOC to create a new component
const MyComponentWithLoading = withLoading(MyComponent);

export default MyComponentWithLoading;
