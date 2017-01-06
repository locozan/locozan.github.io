import React from 'react';
import ReactDom from 'react-dom';
import Component from '../../libs/Component';

import AddInput from '../../components/AddInput';
import ChatLog from '../../components/ChatLog';

export default class Home extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( 'log', 'robot' );
  }

  onAdd(){
    let robot = this.sharedState.robot;

    clearTimeout( this.autoReplyTimer );
    this.autoReplyTimer = setTimeout( () => {
      this.sharedState.log.push( {
        message: robot[ Math.floor( Math.random() * robot.length ) ].value,
        from: 'robot'
      } );

      this.updateSharedState( 'log' );
    }, 1000 );
  }


  render(){
    return (
      <div>
        <div className="speaker"></div>
        <ChatLog />
        <AddInput onAdd={ this.onAdd.bind( this ) } />
        <div className="button"></div>
      </div>
    );
  }
}