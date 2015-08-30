import React from 'react/addons';
import TechPill from './tech-pill';
import _ from 'lodash';

const SKILL_SAMPLES = ['javascript', 'hapi.js', 'slack', 'node', 'objective-c', 'ios', 'react', 'flux', 'CI', 'ruby'];

let Project = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    description: React.PropTypes.description,
    img: React.PropTypes.string,
    skills: React.PropTypes.array,
    language: React.PropTypes.string,
    personal: React.PropTypes.bool
  },

  projectSkills() {
    return _.map(_.times(4), function(i) {
      return (
        <TechPill key={i} name={_.sample(SKILL_SAMPLES)} />
      )
    })
  },

  projectIcon() {
    if (!this.props.img) {
      return <div className={`project-pill objective-c`}>Sprintly</div>
    } else {
      return `IMAGE`;
    }
  },

  render() {
    let personal;
    if (!this.props.personal) {
      personal = <span className="personal">Personal Project</span>
    }

    return (
      <div className="project">
        <div className="row">
          <div className="project-icon col-xs-3">
            {this.projectIcon()}
            {personal}
          </div>
          <div className="project-skills col-xs-9 pull-right">
            {this.projectSkills()}
          </div>
          <div className="description col-xs-12">
            A slack integration with a node backend. Partyline is a growth product for Sprintly which lets users manage their Sprintly projects from within Slack. I designed and built the first version including the marketing site.
          </div>
          <div className="project-role col-xs-6">
            Role: Engineer
          </div>
          <div className="project-link col-xs-6">
            Link: partyline.rocks
          </div>
        </div>
      </div>
    );
  }
});

export default Project;
