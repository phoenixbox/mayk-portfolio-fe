import React from 'react/addons';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';

// Others: hackerRank
const PRESENCE_LINKS = {
  'github': 'https://github.com/',
  'twitter': 'https://twitter.com/',
  'dribbble': 'https://dribbble.com/',
  'angel-list': 'https://angel.co/',
  'product-hunt': 'http://www.producthunt.com/',
  'hacker-news': 'https://news.ycombinator.com/user?id=',
  'stack-overflow': 'http://stackoverflow.com/users/'
}


let PresenceLinks = React.createClass({
  propTypes: {
    links: React.PropTypes.shape({
      name: React.PropTypes.string,
      handle: React.PropTypes.string,
      friendlyName: React.PropTypes.string
    })
  },

  presenceLink(service, handle) {
    return `${PRESENCE_LINKS[service]}${handle}`;
  },

  buildLinks() {
    return _.map(this.props.links, (link, i) => {
      return (
        <li key={i} className="presence-link">
          <div className="row">
            <div className="col-xs-4">
              <Isvg className={`${link.name}-icon`} src={`/img/svg/presence/${link.name}.svg`}></Isvg>
            </div>
            <div className="col-xs-8">
              <div className="service-name">{link.friendlyName}</div>
              <a target="_blank" href={this.presenceLink(link.name, link.handle)} className="handle">{link.handle}</a>
            </div>
          </div>
        </li>
      )
    })
  },

  render() {
    return (
      <div className="presence-links">
        <ul className="links-list">
          {this.buildLinks()}
        </ul>
      </div>
    );
  }
});

export default PresenceLinks;
