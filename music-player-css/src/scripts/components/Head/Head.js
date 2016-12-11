import React from 'react';
import { render } from 'react-dom';
import Component from "../../libs/Component.js";
import "./Head.css";

export default class Head extends Component{
  constructor( props ){
    super( props );
  }

  render(){
    return (
      <div className="heads">
        <div className="logo-nav">
          <h2><span className="logo-nav-span">♨</span>我的播放器</h2>
        </div>
        <div className="search-nav">
        <div className="search-nav-sign">
          <span>⇦</span><span>⇨</span>
        </div>
          <div className="wrap">
             <div className="search">
                <input type="text" className="searchTerm" placeholder="搜索音乐、歌手、歌词" />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search">♪</i>
               </button>
             </div>
          </div>
        </div>
        <div className="set-nav">
          <span className="set-nav-span1" style={ {width:'10px'}}>☬</span>
          <h1 className="set-nav-span1">请登录</h1>
          <span className="set-nav-span2">👕</span>
          <span className="set-nav-span3">✉</span>
          <span className="set-nav-span4">✹</span>
          <span className="set-nav-span5">-</span>
          <span className="set-nav-span6">☐</span>
          <span className="set-nav-span7">×</span>
        </div>
      </div>
    );
  }
}