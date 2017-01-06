import React from 'react';
import Component from "../../libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
import "./JumpPage.css"

export default class JumpPage extends Component {
  constructor( props ){
    super( props );
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <div className="wechat-bav">
          <div className="wechat-bav-wechat"><span className="wechat-bav-wechat-icon"><Link to="/Discovrery">返回</Link></span></div>
          <div className="wechat-bav-name">空白页</div>
          <div className="wechat-bav-add"><span className="wechat-bav-name-icon">完成</span></div>
        </div>
        <div className="wechat-container"></div>
        <div className="wechat-dock"></div>
      </div>
    );
  }
}