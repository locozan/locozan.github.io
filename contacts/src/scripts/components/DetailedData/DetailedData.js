import React from "react";
import { Router, Route, Link } from 'react-router';
import Component from "../../libs/Component.js";
import "./DetailedData.css"

export default class DetailedData extends Component {
  constructor( props ){
    super( props );
    this.importSharedState( "list" );
  }

  render(){
    // var fi = [12,23,43,21,23].filter( function(x){return x > 20;} ) //[23, 43, 21, 23]
    // var fi = [12,23,43,21,23].filter( fi=> fi > 20 )                //[23, 43, 21, 23] 
    
    const item = this.sharedState.list.filter( item => item.id === this.props.params.id )[ 0 ];
    console.log( item );
    const { id, name, corporation, call, email } = item; //等同const id=item.id; const name=item.name; 

    return (
      <div>
        <div className="nav-bar">
          <ul>
            <li className="return">
              <Link to="" activeClassName="active">返回</Link>
            </li>
            <li className="all">所有联系人</li>
            <li className="increase">
              <Link to={ `/edit/${ id }` } activeClassName="active">编辑</Link>
            </li>
          </ul>
        </div>

        <div className="user-card">
          <div className="user-card_portrait">
            <div className="user-card_portrait_photo">照片</div>
          </div>
          <div className="user-card_name">名字: { name }</div>
          <div className="user-card_corporation">公司: { corporation }</div>
          <div className="user-card_call">电话: { call }</div>
          <div className="user-card_email">邮箱:{ email }</div>
        </div>
      </div>
    );
  }
}
