import React from 'react/addons';
import Persona from '../components/persona';
import TechPill from '../components/tech-pill';
import ContactDetails from '../components/contact-details';
import PresenceLinks from '../components/presence-links';
import WorkExperience from '../components/work-experience';
import Project from '../components/project';
import Footer from '../components/footer';
import _ from 'lodash';

const PRESENCE_LINKS = [
  {
    name: 'github',
    handle: 'phoenixbox',
    friendlyName: 'GitHub'
  },
  {
    name: 'twitter',
    handle: 'shanedjrogers',
    friendlyName: 'Twitter'
  },
  {
    name: 'dribbble',
    handle: 'phoenixbox',
    friendlyName: 'Dribble'
  },
  {
    name: 'angel-list',
    handle: 'shane-rogers',
    friendlyName: 'Angel List'
  },
  {
    name: 'product-hunt',
    handle: '@shanedjrogers',
    friendlyName: 'Product Hunt'
  },
  {
    name: 'stack-overflow',
    handle: '2419675/phoenixbox',
    friendlyName: 'Stack Overflow'
  }
]

let App = React.createClass({
  workExperience() {
    return  _.map(_.times(2), (i) => {
      return <WorkExperience key={i} />
    })
  },

  projects() {
    return  _.map(_.times(4), (i) => {
      return <Project key={i} />
    })
  },

  topLanguageSkills() {
    let topLanguages = ['javascript', 'objective-c', 'ruby'];

    return  _.map(_.times(3), (i) => {
      return <TechPill name={topLanguages[i]} key={i} />
    })
  },

  render() {
    return (
      <div className="container">
        <div className="persona-row row">
          <div className="col-xs-12 col-sm-8">
            <Persona />
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="pills-wrapper">
              {this.topLanguageSkills()}
            </div>
            <ContactDetails />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <PresenceLinks links={PRESENCE_LINKS} />
          </div>
        </div>
        <div className="row">
          <div className="section col-xs-12">
            <div className="section-header">Work Experience</div>
            <div className="header-sep"></div>
            {this.workExperience()}
          </div>
        </div>
        <div className="row">
          <div className="section col-xs-12">
            <div className="section-header">Projects</div>
            <div className="header-sep"></div>
            {this.projects()}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
});

export default App;
