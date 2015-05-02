class Greeting extends React.Component {
  render() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: React.PropTypes.string
};
