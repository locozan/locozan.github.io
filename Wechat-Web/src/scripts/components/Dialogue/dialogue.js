import React from 'react';
import { render } from 'react-dom';
import Component from "../../libs/Component.js";
import "./dialogue.css";

import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';


class Chatlog extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( "log" );
  }

  componentWillUpdate(){
    let screen = this.refs.screen;
  
    if( screen.scrollTop > 0 ){
      screen.scrollTop = screen.scrollTop - 50;
      console.log( screen.scrollTop );
    }

    screen.scrollTop = screen.scrollHeight;
  
  }

  render(){
    return (
        <div className="screen" ref="screen">
          <div className="dialog-left">
            <ul>
              <li className="role-left"></li>
              <li className="content-left">主人，我只是一个自动对话机器人，有什么可以帮您吗？</li>
            </ul>
          </div>
          {
            this.sharedState.log.map( ( item, index ) => {
              const dir = item.from === 'me' ? 'right':'left';

              return <div style={ { clear: 'both' } } key={index}>
                <div className={'dialog-'+ dir}>
                  <ul>
                    <li className={'role-'+ dir}></li>
                    <li className={'content-'+ dir}><p>{ item.message }</p></li>
                  </ul>
                </div>
              </div>
            })
          }
      </div>
    );
  }
}


class AddDialog extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( "log" );
  }

  onKeyDown( event ){
    if( event.keyCode !== 13 ){
      return;
    }
    const value = event.target.value;

    if( !value ){
      return;
    }

    this.sharedState.log.push( { message: value, from: "me" } );

    this.updateSharedState( 'log' );

    event.target.value ='';

    if( this.props.onAdd )
      this.props.onAdd();
  }


  render(){
    return (
        <div className="copy-editor">
          <ul>
            <li className="pic_p1"></li>
            <li><input type="text" className="btn" onKeyDown={ this.onKeyDown.bind( this ) } placeholder="输入内容"/></li>
            <li className="send"></li>
            <li className="phiz"></li>
          </ul>
        </div>
    );
  }
}

export default class Dialogue extends Component {
    constructor( props ){
    super( props );

    this.importSharedState( "robot","log" );
  }
  onAdd(){
    let robot = this.sharedState.robot;

    clearTimeout( this.autoReplyTimer );
    this.autoReplyTimer = setTimeout( () =>{
      this.sharedState.log.push( {
        message: robot[ Math.floor( Math.random() * robot.length ) ].value,
        from: 'robot'
      } )
      this.updateSharedState( 'log' );
    }, 1000 );
  }

  render(){
    return (
      <div>
        <div className="wechat-bav">
          <div className="wechat-bav-wechat"><span className="wechat-bav-wechat-icon"><Link to="/home">微信</Link></span></div>
          <div className="wechat-bav-name">人机对话</div>
        </div>
        <div className="speaker"></div>
        <AddDialog onAdd={ this.onAdd.bind( this ) } />
        <Chatlog />
      </div>
    );
  }
}



