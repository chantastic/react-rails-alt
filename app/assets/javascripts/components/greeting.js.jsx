class Greeting extends React.Component {
  render() {
    return (
      <div>
        {this.props.prefix} {this.props.name} {this.props.suffix}
      </div>
    );
  }
}

Greeting.propTypes = {
  name: React.PropTypes.string
  prefix: React.PropTypes.string,
  suffix: React.PropTypes.string
};
