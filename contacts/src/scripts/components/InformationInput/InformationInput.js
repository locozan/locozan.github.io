import React from "react";
import { Router, Route, Link } from 'react-router';
import Component from "../../libs/Component.js";
import "./InformationInput.css";

export default class InformationInput extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( "list" );
    this.data = null;
    this.index = null;
  }

  componentWillMount(){//装载
    this.mode = /^\/edit\/\d+/.test( this.props.location.pathname ) ? 'edit' : 'add';

    if( this.mode === 'edit' ){
      this.data = this.sharedState.list.filter( item => item.id === this.props.params.id )[ 0 ];
      this.sharedState.list.forEach( ( item, index )=>{//遍历获得指定index
        if( item.id === this.props.params.id )
          this.index = index;
      } );
    }else{
      const newId = this.sharedState.list.reduce( ( n, item ) => Math.max( n, Number( item.id ) ), 0 ) + 1;
      //计算this.sharedState.list最大id值加1
      this.data = { id: String( newId ) };
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
      this.sharedState.list.push( this.data );  
    }
    
    this.updateSharedState( 'list' );
    location.hash = '#/';
  }
  onDelete(){
    this.sharedState.list.splice( this.index , 1 );
    this.updateSharedState( 'list' );
    location.hash = '#/';
  }

  render(){
    const { name = '', corporation = '', call = '', email = '' } = this.data;

    return (
      <div>
        <div className="nav-bar">
          <ul>
            <li className="return">
              <Link to="">返回</Link>
            </li>
            <li className="all">所有联系人</li>
            <li className="increase">
              <a onClick={ this.doSave.bind( this ) }>保存</a>
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="card_portrait">
            <div className="card_portrait_photo"></div>
          </div>
          <div className="card_name">
            <input type="text" onChange={ this.bindChange.bind( this, 'name' ) } defaultValue={ name } className="btn" placeholder="名字"/><span className="bar"></span><label></label>
          </div>
          <div className="card_corporation">
            <input type="text" onChange={ this.bindChange.bind( this, 'corporation' ) } defaultValue={ corporation } className="btn" placeholder="公司"/><span className="bar"></span><label></label>
          </div>
          <div className="card_call">
            <input type="text" onChange={ this.bindChange.bind( this, 'call' ) } defaultValue={ call } className="btn" placeholder="增加电话"/><span className="bar"></span><label></label>
          </div>
          <div className="card_email">
            <input type="text" onChange={ this.bindChange.bind( this, 'email' ) } defaultValue={ email } className="btn" placeholder="增加电子邮件"/><span className="bar"></span><label></label>
          </div>
          <div className="delete-button">
            <div className="button-face" onClick={ this.onDelete.bind( this ) }>Delete</div>
          </div>
        </div>
      </div>
    );
  }
}