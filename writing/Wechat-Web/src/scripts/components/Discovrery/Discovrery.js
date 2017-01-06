import React from 'react';
import Component from "../../libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
import "./Discovery.css"

export default class Discovery extends Component {
  constructor( props ){
    super( props );
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <div className="wechat-bav">
          <div className="wechat-bav-name">发现</div>
        </div>
        <div className="wechat-container">
          <Link to="/JumpPage"><div className="wechat-container-div1">◎朋友圈</div></Link>
          <Link to="/JumpPage"><div className="wechat-container-div2">👉扫一扫</div></Link>
          <Link to="/JumpPage"><div className="wechat-container-div3">👋摇一摇</div></Link>
          <Link to="/JumpPage"><div className="wechat-container-div4">🎯附近的人</div></Link>
          <Link to="/JumpPage"><div className="wechat-container-div5">💦漂流瓶</div></Link>
          <Link to="/JumpPage"><div className="wechat-container-div6">👛购物</div></Link>
          <Link to="/JumpPage"><div className="wechat-container-div7">🎮游戏</div></Link>
        </div>
        <div className="wechat-dock">
          <ul>
            <li className="wechat-dock-item1"><span className="wechat-dock-item1-span"><Link to="/Home"><p>微信</p></Link></span></li>
            <li className="wechat-dock-item2"><span className="wechat-dock-item2-span"><Link to="/Addresslist"><p>通讯录</p></Link></span></li>
            <li className="wechat-dock-item3"><span className="wechat-dock-item3-span" style={{backgroundColor:'#62E460'}}><Link to="/Discovrery"><p>发现</p></Link></span></li>
            <li className="wechat-dock-item4"><span className="wechat-dock-item4-span"><Link to="/Oneself"><p>我</p></Link></span></li>
          </ul>
        </div>
      </div>
    );
  }
}