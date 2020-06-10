import React, { Component, PureComponent } from "react";
import "../styles/app.scss";

class App extends Component {
  render() {
    return (
      <div className={"wrapper"}>
        <SomeFunctionalComponent greeting="Bonjour" />
        <SomeClassComponent greeting="Good evening" />
        <SomePureComponent greeting="Hello there" />
      </div>
    );
  }
}

export default App;

function SomeFunctionalComponent(props) {
  return (
    <div className="functional">{props.greeting}, I'm Functional Component</div>
  );
}

class SomeClassComponent extends Component {
  render() {
    return (
      <div className="class">{this.props.greeting}, I'm Class Component</div>
    );
  }
}

class SomePureComponent extends PureComponent {
  render() {
    return (
      <div className="pure">{this.props.greeting}, I'm Pure Component</div>
    );
  }
}
