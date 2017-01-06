import React from 'react';
import Component from "../../libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
import "./Addinput.css"

export default class Addinput extends Component {
  constructor( props ){
    super( props );
    this.importSharedState( "friends" );
  }
  onClick( event ){
    location.hash = '/Dialogue';
  }

  render(){
    // var fi = [12,23,43,21,23].filter( function(x){return x > 20;} ) //[23, 43, 21, 23]
    // var fi = [12,23,43,21,23].filter( fi=> fi > 20 )                //[23, 43, 21, 23] 
    
    const item = this.sharedState.friends.filter( item => item.id === this.props.params.id )[ 0 ];

    const { id,logo, name, remark, call, more,region } = item; //等同const id=item.id; const name=item.name; 

    return (
      <div>
        <div className="wechat-bav">
          <div className="wechat-bav-wechat"><span className="wechat-bav-wechat-icon"><Link to="/home">微信</Link></span></div>
          <div className="wechat-bav-name">详细资料</div>
          <div className="wechat-bav-add"><span className="wechat-bav-name-icon"><Link to={ `/edit/${ id }` }>编辑</Link></span></div>
        </div>

        <div className="card-container">
          <div className="card-container_portrait">
            <div className="card_portrait_photo" style={{backgroundImage:`url(${ logo })`,backgroundRepeat: 'round'}}></div>
            <div className="card-container_name">
              <div>{name}</div>
              <div>微信号:{call}</div>
              <div>昵称:{name}</div>
            </div>
          </div>
          <div className="card-container_remark">
            <div>{remark}</div>
          </div>
          <div className="card-container_remark">
            <div>{call}</div>
          </div>
          <div className="card-container_region">
            <div>{region}</div>
          </div>
          <div className="card-container_more">
            <div>{more}</div>
          </div>
          <div className="card-container-fa">
            <div>
              <p className="card-container-div-p" onClick={ this.onClick.bind( this ) }>发消息</p>
            </div>
          </div>
          <div className="card-container-lt">
            <div>
              <p className="card-container-div-p" style={ {backgroundColor:'#FFF',color:"#000"} } onClick={ this.onClick.bind( this ) }>视频聊天</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}