import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}


function Happy() {
    const name = 'Alice';
    return <MyPureComponent name={name} />;
  }


  export default Happy;