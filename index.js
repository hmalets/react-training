import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'

const wrapper = React.createElement(
  'div',
  { className: 'wrapper' },
);

function SomeFunctionalComponent(props) {
  return <div className="functional">{props.greeting}, I'm Functional Component</div>;
}

class SomeClassComponent extends Component {
  render() {
    return (
      <div className="class">
        {this.props.greeting}, I'm Class Component
      </div>
    )
  }
}

class SomePureComponent extends PureComponent {
  render() {
    return (
      <div className="pure">
        {this.props.greeting}, I'm Pure Component
      </div>
    )
  }
}

ReactDOM.render(wrapper, document.querySelector('#app'));
ReactDOM.render(<React.Fragment>
  <SomeFunctionalComponent greeting="Bonjour" />
  <SomeClassComponent greeting="Good evening" />
  <SomePureComponent greeting="Hello there"/>
</React.Fragment>, document.querySelector('.wrapper'));