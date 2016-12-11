import React from "react";
import { Router, Route, Link } from 'react-router';
import Component from "../../libs/Component.js";

export default class HomePage extends Component {
  constructor( props ){
    super( props );
    this.importSharedState( "list", "searchText" );

    this.data = null;
  }

  dataWalker(){
    const data = [];
    const firstNameMap = new Map;
    const searchText = this.sharedState.searchText;

    const list = this.sharedState.list.filter( item => item.name.indexOf( searchText ) > -1 );

    for( let item of list ){

      let firstName = item.name[ 0 ] 
      // console.log( firstName );

      let cache = firstNameMap.get( firstName );

      if( !cache )
        firstNameMap.set( firstName, cache = [] );

      cache.push( item );
      // console.log( cache );
    }

    for( let item of firstNameMap ){
      data.push( {
        firstName: item[ 0 ],
        items: item[ 1 ]
      } );
    }

    this.data = data;
  }

  componentWillMount(){
    window.addEventListener( "tocuhmove", function( event ){  
      event.preventDefault()
    } )
    this.dataWalker();
  }

  componentWillUpdate(){
    this.dataWalker();
  }

  componentWillUnmount(){
    this.data = null;
  }

  onSearch( event ){
    this.sharedState.searchText = event.target.value;
    this.updateSharedState( 'searchText' );
  }

  render(){
    return (
      <div>
        <div className="nav-bar">
          <ul>
            <li className="return">
              <Link to="" activeClassName="active"></Link>
            </li>
            <li className="all">所有联系人</li>
            <li className="increase">
              <Link to="/add" activeClassName="active">添加</Link>
            </li>
          </ul>
        </div>

        <div className="search-bar">
          <div className="search">
            <input defaultValue="" onChange={ this.onSearch.bind( this ) } type="text" id="findBtn" placeholder="Search for task..." />
          </div>
        </div>
        <div className="communication-list">
          <div id="list1">
            { this.data.map( ( item, index ) =>
              <div key={ index }>
                <div className="ioslist-group-container">
                  <div className="ioslist-group-header">{ item.firstName }</div>
                  <ul>
                    { item.items.map( ( item, index ) => <li key={ index }><Link to={ `/detail/${ item.id }` } activeClassName="active">{ item.name }</Link></li> ) }
                  </ul>  
                </div>
              </div>
            ) }
          </div>
        </div>
      </div>      
    );
  }
}



                    
                    
