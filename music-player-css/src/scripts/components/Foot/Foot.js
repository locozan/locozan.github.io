import React from 'react';
import { render } from 'react-dom';
import Component from "../../libs/Component.js";
import "./Foot.css";

export default class Foot extends Component {
  constructor( props ){
    super( props );
  }


  render(){
    return (
      <div>
        <div className="foots">
          <span className="foots-hd-onList">☱</span>
          <span className="foots-hd-model">🔀</span>
          <span className="foots-hd-die"></span>
          <span className="foots-hd-name"><strong>Faded</strong>  Conor Maynard、Anth</span>
          <span className="foots-hd-bar">🔘</span>
          <div className="foots-hd">
            <button className="foots-hd-rw"></button>
            <button className="foots-hd-play"></button>
            <button className="foots-hd-ff"></button>
          </div>
          <div className="music-article">
            <p>00:00</p>
            <p className="music-article-bar"><span className="music-article-bar-spot">🔘</span></p>
            <p>05:00</p>
            <span>🔊</span>
            <p className="music-article-bar-sound"><span className="music-article-bar-sound-span"></span></p>
            <span></span>
            <span>©️</span>
          </div>
        </div>
      </div>
    );
  }
}