/**
 * @author dron
 * @createAt 2016-10-24
 *
 * usage:
 *
 * // for init shared states:init共享状态:
 * 
 * Component.initSharedState( {
 *   someData1: [ ... ],
 *   someData2: { ... },
 *   someData3: true,
 *   someData4: 100
 * } );
 *
 * 
 * // your component define like this:您的组件定义是这样的:
 *
 * export default class YourComponent1 extends Component {
 *   constructor( props ){
 *     super( props );
 *     
 *     this.importSharedState( 'someData1', 'someData4' );
 *
 *     // then you can use `this.sharedState.someData1` and 然后您可以使用“this.sharedState。someData1”和
 *     // `this.sharedState.someData4` anywhere. “this.sharedState。someData4的任何地方。
 *   }
 *
 *   someEvents(){
 *     // if `this.sharedState.someData1` has been modified.如果this.sharedState。someData1”已被修改。
 *     
 *     // don't forget to:别忘了:
 *     this.updateSharedState( 'someData1' );
 *
 *     // you can update more share states:你可以更新更多的分享:
 *     this.updateSharedState( 'someData1', 'someData4' );
 *   }
 *
 *   render(){
 *     // for example:例如:
 *     return <div>{ this.sharedState.someData1.map( ... ) }</div>;
 *   }
 * }
 */

const clone = ( () => {
  const s = /num|str|boo|und/, f = /fun/, m = /date|rege/i;

  return json => {
    let t, i, r;

    t = typeof json;

    if( s.test( t ) || !json )
      return json;

    if( f.test( t ) )
      return new Function( 'return ' + json.toString() )();

    if( m.test( json.constructor ) )
      return new json.constructor( json.valueOf() );

    r = 'length' in json ? [] : {};

    for( i in json )
      if( json.hasOwnProperty( i ) )
        r[ i ] = clone( json[ i ] );

    return r;
  };
} )();

const equal = ( () => {
  const s = /num|str|boo|fun/, f = /fun/, m = /date|rege/i;

  return ( a, b ) => {
    let t, i, c;

    t = typeof a;

    if( a === b )
      return true;

    if( t !== typeof b )
      return false;

    if( a !== a && b !== b )
      return true;

    if( s.test( t ) || !a || !b )
      return a === b;

    if( f.test( t ) || m.test( a.constructor ) )
      return a.toString() === b.toString();

    c = {};

    for( i in a )
      if( a.hasOwnProperty( i ) )
        if( c[ i ] = 1, !equal( a[ i ], b[ i ] ) )
          return false;

    for( i in b )
      if( !c[ i ] && b.hasOwnProperty( i ) )
        if( !equal( a[ i ], b[ i ] ) )
          return false;

    return true;
  }
} )();

const globalStore = {};
const allComponents = [];
const globalId = 0;
import React from "react";
import ReactDOM from "react-dom";

const componentWillUnmount = function(){
  let index = allComponents.findIndex( item => item === this );

  if( index > -1 )
    allComponents.splice( index, 1 );
};

export default class Component extends React.Component {
  constructor( props ){
    super( props );

    this.uniqueId = Math.random().toString( 36 ).slice( 2 );
    this.sharedState = {};
    this.backupSharedState = {};

    allComponents.push( this );

    if( this.componentWillUnmount ){
      let localComponentWillUnmount = this.componentWillUnmount;

      this.componentWillUnmount = ( ...args ) => {
        componentWillUnmount.call( this, ...args );
        return localComponentWillUnmount.call( this, ...args );
      }
    }
  }

  componentWillUnmount( ...args ){
    componentWillUnmount.call( this, ...args );
  }

  importSharedState( ...names ){
    for( let name of names ){
      let state = globalStore[ name ];

      if( state === undefined )
        state = globalStore[ name ] = {};

      if( this.backupSharedState[ name ] === undefined )
        this.backupSharedState[ name ] = clone( state );

      this.sharedState[ name ] = state;
    }
  }

  updateSharedState( ...names ){
    const shouldUpdateComponents = {};

    for( let name of names ){
      if( this.sharedState[ name ] === undefined )
        continue;

      let state = this.sharedState[ name ];

      for( let component of allComponents ){
        if( !equal( component.backupSharedState[ name ], state ) ){
          component.sharedState[ name ] = state;
          component.backupSharedState[ name ] = clone( state );
          shouldUpdateComponents[ component.uniqueId ] = component;
        }
      }
    }

    Object.keys( shouldUpdateComponents ).forEach( key => {
      shouldUpdateComponents[ key ].forceUpdate();
    } );
  }

  static initSharedState( store ){
    for( let name in store ){
      if( store.hasOwnProperty( name ) )
        globalStore[ name ] = store[ name ];
    }
  }
}