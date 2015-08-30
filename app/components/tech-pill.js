import React from 'react/addons';
import _ from 'lodash';
import classnames from 'classnames';

let TechPill = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render() {
    return (
      <div className={`tech-pill ${this.props.name}`}>{this.props.name}</div>
    );
  }
});

export default TechPill;
