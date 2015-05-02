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
    return (
      <Greeting name={this.state.name} {...this.props} />
    );
  }
}

GreetingContainer.propTypes = {
  prefix: React.PropTypes.string,
  suffix: React.PropTypes.string
};
