import React from 'react';
import { render } from 'react-dom';
import Component from "../../libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
import "./Oneself.css";

export default class Oneself extends Component {
  constructor( props ){
    super( props );
    this.importSharedState( "oneself" );
  }

  componentDidMount(){
    console.log( this.sharedState.oneself[0].logo );
  }

  render(){
    return (
      <div className="">
        <div className="wechat-bav">
          <div className="wechat-bav-name">我</div>
        </div>
        <div className="wechat-container">
          <Link to="/JumpPage"><div className="wechat-oneself-div1">
            <div className="wechat-oneself-div1-logo" style={{backgroundImage:`url(${this.sharedState.oneself[0].logo})`}}></div>
            <ul className="wechat-oneself-div1-ul">
              <li>{this.sharedState.oneself[0].name}</li>
              <li>微信号:{this.sharedState.oneself[0].call}</li>
            </ul>
          </div></Link>
          <Link to="/JumpPage"><div className="wechat-oneself-div2">👉相册</div></Link>
          <Link to="/JumpPage"><div className="wechat-oneself-div3">👋收藏</div></Link>
          <Link to="/JumpPage"><div className="wechat-oneself-div4">🎯钱包</div></Link>
          <Link to="/JumpPage"><div className="wechat-oneself-div5">💦卡包</div></Link>
          <Link to="/JumpPage"><div className="wechat-oneself-div6">👛表情</div></Link>
          <Link to="/JumpPage"><div className="wechat-oneself-div7">🎮设置</div></Link>
        </div>
        <div className="wechat-dock">
          <ul>
            <li className="wechat-dock-item1"><span className="wechat-dock-item1-span"><Link to="/Home"><p>微信</p></Link></span></li>
            <li className="wechat-dock-item2"><span className="wechat-dock-item2-span"><Link to="/Addresslist"><p>通讯录</p></Link></span></li>
            <li className="wechat-dock-item3"><span className="wechat-dock-item3-span"><Link to="/Discovrery"><p>发现</p></Link></span></li>
            <li className="wechat-dock-item4"><span className="wechat-dock-item4-span" style={{backgroundColor:'#62E460'}}><Link to="/Oneself"><p>我</p></Link></span></li>
          </ul>
        </div>
      </div>
    );
  }
}