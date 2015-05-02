class NameInput extends React.Component {
  constructor() {
    this.handleChange = () => {
      this.props.onChange(this._name.getDOMNode().value);
    }
  }

  render() {
    return (
      <input
       ref={(c) => this._name = c}
       onChange={this.handleChange}
       type="text"
       value={this.props.name} />
    );
  }
}
