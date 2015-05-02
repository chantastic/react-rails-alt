class GreetingContainer extends React.Component {
  constructor() {
    this.state = {name: "John"};
  }

  render() {
    return <Greeting name={this.state.name} />;
  }
}
