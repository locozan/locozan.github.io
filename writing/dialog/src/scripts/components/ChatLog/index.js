import React from 'react';
import ReactDom from 'react-dom';
import Component from '../../libs/Component';

export default class ChatLog extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( 'log' );
  }

  componentDidUpdate(){
    let screen = this.refs.screen;
    screen.scrollTop = screen.scrollHeight;
  }

  render(){
    return (
      <div>
        <div className="screen" ref="screen">
          {
            this.sharedState.log.map( ( item, index ) => {
              const dir = item.from === 'me' ? 'right' : 'left';

              return <div style={ { clear: 'both' } } key={ index }>
                <div className={ 'dialog-' + dir }>
                  <ul>
                    <li className={ 'role-' + dir }></li>
                    <li className={ 'content-' + dir }>{ item.message }</li>
                  </ul>
                </div>
              </div>
            } )
          }
        </div>
      </div>
    );
  }
}