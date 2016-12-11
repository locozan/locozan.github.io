import React from 'react';
import { render } from 'react-dom';
import Component from "../../libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
import "./DetailedData.css";

export default class DetailedData extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( "friends" );
    this.data = null;
    this.index = null;

  }
  componentWillMount(){//装载
    this.mode = /^\/edit\/\d+/.test( this.props.location.pathname ) ? 'edit' : 'add';

    if( this.mode === 'edit' ){
      this.data = this.sharedState.friends.filter( item => item.id === this.props.params.id )[ 0 ];
      this.sharedState.friends.forEach( ( item, index )=>{//遍历获得指定index
        if( item.id === this.props.params.id )
          this.index = index;
      } );
    }else{
      const newId = this.sharedState.friends.reduce( ( n, item ) => Math.max( n, Number( item.id ) ), 0 ) + 1;
      //计算this.sharedState.friends最大id值加1
      this.data = { id: String( newId ),logo:'images/group.png' };
    }
  }
 
  componentWillUnmount(){//组件将要移除
    this.data = null;
  }
 
  bindChange( key, event ){
    this.data[ key ] = event.target.value;
  }

  doSave(){
      if( this.mode === 'add' && this.data.name !== undefined ){
      this.sharedState.friends.push( this.data );
    }
    
    this.updateSharedState( 'friends' );
    location.hash = '#/';
  }
  onDelete(){
    this.sharedState.friends.splice( this.index , 1 );
    this.updateSharedState( 'friends' );
    location.hash = '/Addresslist';
  }

  render(){
    const { name = '', call = '', remark = '', region = '',more = '' } = this.data;
    return (
      <div>
        <div className="wechat-bav">
          <div className="wechat-bav-wechat"><span className="wechat-bav-wechat-icon"><Link to="/home">微信</Link></span></div>
          <div className="wechat-bav-name">添加朋友</div>
          <div className="wechat-bav-add">
            <span className="wechat-bav-name-icon" onClick={ this.doSave.bind( this ) }>添加</span>
          </div>
        </div>
        <div className="card-container">
          <div className="card-container_portrait">
            <div className="card_portrait_photo"></div>
            <div className="card-container_name">
              <input type="text" onChange={ this.bindChange.bind( this, 'name' ) } defaultValue={ name } className="btns" placeholder="名字"/><span className="bar"></span>
              <input type="text" onChange={ this.bindChange.bind( this, 'call' ) } defaultValue={ call }  className="btns" placeholder="增加电话"/><span className="bar"></span>
            </div>
          </div>
          <div className="card-container_remark">
            <input type="text" onChange={ this.bindChange.bind( this, 'remark' ) } defaultValue={ remark }  className="btns" placeholder="公司"/><span className="bar"></span>
          </div>
          <div className="card-container_region">
            <input type="text" onChange={ this.bindChange.bind( this, 'region' ) } defaultValue={ region }  className="btns" placeholder="地址"/><span className="bar"></span>
          </div>
          <div className="card-container_more">
            <input type="text" onChange={ this.bindChange.bind( this, 'more' ) } defaultValue={ more }  className="btns" placeholder="更多"/><span className="bar"></span>
          </div>
        </div>
        <div className="delete-button">
          <div className="button-face" onClick={ this.onDelete.bind( this ) }>Delete</div>
        </div>
      </div>
    );
  }
}