class NameInputContainer extends React.Component {
  constructor() {
    this.state = NameStore.getState();

    this.handleViewChange = (newName) => {
      NameActions.updateName(newName);
    };

    this.handleStoreChange = (state) => {
      this.setState(state);
    }
  }

  componentWillMount() {
    NameStore.listen(this.handleStoreChange);
  }

  componentWillUnmount() {
    NameStore.unlisten(this.handleStoreChange);
  }

  render() {
    return (
      <NameInput
       name={this.state.name}
       onChange={this.handleViewChange} />
    );
  }
}
