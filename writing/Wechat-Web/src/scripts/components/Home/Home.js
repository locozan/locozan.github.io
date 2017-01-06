import React from 'react';
import Component from "../../libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
import "./Home.css"

export default class Home extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( "list" );
  }

  onSearch(){

  }
  onClick( event ){
    location.hash = '/Dialogue';
  }

  render(){
    return (
      <div>
        <div className="wechat-bav">
          <div className="wechat-bav-name">微信</div>
          <div className="wechat-bav-add"><span className="wechat-bav-name-icon"><Link to="/add">+</Link></span></div>
        </div>
        <div className="wechat-container">
          <div className="wechat-container-list">
            <div className="search-bar">
              <input defaultValue="" onChange={ this.onSearch.bind( this ) } type="text" id="findBtn" placeholder="Search for task..." />
            </div>
            <ul>
              { this.sharedState.list.map(( item, index ) =>
                <li key={index} onClick={ this.onClick.bind( this ) } >
                  <div className="wechat-container-photo" style={{backgroundImage: `url(${item.logo})`}} ></div>
                  <div className="wechat-container-title"><p>{ item.title }</p><span className="wechat-container-time">{ item.time }</span></div>
                  <div className="wechat-container-record"><p>{ item.message }</p></div>
                </li>
              ) }
            </ul>
          </div>
        </div>
        <div className="wechat-dock">
          <ul>
            <li className="wechat-dock-item1"><span className="wechat-dock-item1-span" style={{backgroundColor:'#62E460'}}><Link to="/Home"><p>微信</p></Link></span></li>
            <li className="wechat-dock-item2"><span className="wechat-dock-item2-span"><Link to="/Addresslist"><p>通讯录</p></Link></span></li>
            <li className="wechat-dock-item3"><span className="wechat-dock-item3-span"><Link to="/Discovrery"><p>发现</p></Link></span></li>
            <li className="wechat-dock-item4"><span className="wechat-dock-item4-span"><Link to="/Oneself"><p>我</p></Link></span></li>
          </ul>
        </div>
      </div>
    );
  }
}



