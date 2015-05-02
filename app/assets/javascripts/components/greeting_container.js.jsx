class GreetingContainer extends React.Component {
  constructor() {
    this.state = NameStore.getState();

    this.handleViewChange = (state) => {
      this.setState(state);
    }
  }

  componentWillMount() {
    NameStore.listen(this.handleViewChange);
  }

  componentWillUnmount() {
    NameStore.unlisten(this.handleViewChange);
  }

  render() {
    return <Greeting name={this.state.name} />;
  }
}
