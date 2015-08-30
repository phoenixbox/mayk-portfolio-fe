import React from 'react/addons';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';

let Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <div className="row">
        <div className="col-xs-4">shane@repllabs.com</div>
        <div className="mayk-stamp col-xs-4">
          Made in San Francisco by
          <Isvg className="octagon" src="/img/svg/desktopOctagon.svg"></Isvg>
          <span className="mayk-name">MAYK</span>
        </div>
        <div className="col-xs-4">7209992056</div>
        </div>
      </div>
    );
  }
});

export default Footer;
