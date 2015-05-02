class NameInput extends React.Component {
  constructor() {
    this.state = {name: ""};

    this.handleChange = () => {
      this.setState((state) => ({name: this._name.getDOMNode().value}));
    }
  }

  render() {
    return (
      <input
       ref={(c) => this._name = c}
       onChange={this.handleChange}
       type="text"
       value={this.state.name} />
    );
  }
}
