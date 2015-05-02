var Greeting = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
});
