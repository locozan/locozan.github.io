import React from 'react';
import ReactDom from 'react-dom';
import Component from '../../libs/Component';

export default class AddInput extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( 'log' );
  }

  onKeyDown( event ){
    if( event.keyCode !== 13 ){
      return;
    }

    const value = event.target.value;

    if( !value ){
      return;
    }
    
    this.sharedState.log.push( { message: value, from: 'me' } );

    this.updateSharedState( 'log' );

    event.target.value = '';

    if( this.props.onAdd )
      this.props.onAdd();
  }

  render(){
    return (
      <div>
        <div className="copy-editor">
          <ul>
            <li className="pic_p1"></li>
            <li>
              <input onKeyDown={ this.onKeyDown.bind( this ) }  type="text" className="btn" placeholder="输入内容"/>
            </li>
            <li className="send"></li>
            <li className="phiz"></li>
          </ul>
        </div>
      </div>
    );
  }
}