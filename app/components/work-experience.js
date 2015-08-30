import React from 'react/addons';
import _ from 'lodash';

let WorkExperience = React.createClass({
  propTypes: {
    employer: React.PropTypes.string,
    img: React.PropTypes.string,
    description: React.PropTypes.description,
    startDate: React.PropTypes.string,
    endDate: React.PropTypes.string
  },

  orgIcon() {
    if (!this.props.img) {
      return <div className={`project-pill objective-c`}>Quickleft</div>
    } else {
      return `IMAGE`;
    }
  },

  render() {
    return (
      <div className="work-experience">
        <div className="row">
          <div className="employer-icon col-xs-3">
            {this.orgIcon()}
          </div>
          <div className="employment-duration col-xs-9 pull-right">
            <span className="value">2.5 years</span>
            <div className="sep"></div>
            <span className="interval">Oct 13 - Present</span>
          </div>
          <div className="description col-xs-12">
            As a consultant engineer at QL I’ve worked across 8 products delivering features in 3 languages. QL is an agile development shop, so I’m well versed in story planning, estimation and working in sprints. We write tests as a standard for shipping production code. Half of my projects involved inheriting legacy code and building features, the other half were greenfield projects which could include design, prototyping, setting up CI as well as writing code.
          </div>
        </div>
      </div>
    );
  }
});

export default WorkExperience;
