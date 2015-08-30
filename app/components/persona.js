import React from 'react/addons';
import _ from 'lodash';
import Isvg from 'react-inlinesvg';

let Persona = React.createClass({
  render() {
    return (
      <div className="persona">
        <div className="avatar">
          <Isvg className="octagon" src="/img/svg/desktopOctagon.svg"></Isvg>
          <img className="github-avatar" src="https://avatars2.githubusercontent.com/u/2892213?v=3&s=460" />
        </div>
        <div className="details">
          <div className="name">Shane Rogers</div>
          <div className="title">Web & Mobile Engineer</div>
          <div className="education">
            <span className="college">Trinity College Dublin</span>
            <span className="degree">(BBS hons 2012)</span>
          </div>
        </div>
      </div>
    );
  }
});

export default Persona;
