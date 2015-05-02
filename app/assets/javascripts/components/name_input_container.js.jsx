class NameInputContainer extends React.Component {
  constructor() {
    this.state = {name: ""};

    this.handleChange = (newName) => {
      this.setState((state) => ({name: newName}));
    };
  }

  render() {
    return (
      <NameInput
       name={this.state.name}
       onChange={this.handleChange} />
    );
  }
}
