import React from 'react';
import Component from "../../libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
import "./Addresslist.css"

export default class Addresslist extends Component {
  constructor( props ){
    super( props );

    this.importSharedState( "friends","searchText");

    this.data = null;
  }
  dataArrange(){
   const data = [];
   const firstNameMap = new Map; 
   const searchText =this.sharedState.searchText;

   const friends = this.sharedState.friends.filter( item => item.name.indexOf( searchText ) > -1 );
    // console.log( friends );

   for( let item of friends ){

    let firstName = item.name[0];

    // console.log( firstName );
    let cache = firstNameMap.get( firstName );

    if( !cache ){
      firstNameMap.set( firstName, cache = [ ] );
    }
    cache.push( item )

   }
   for( let item of firstNameMap ){
      data.push({
        firstName: item[0],
        items: item[1]
      })
   }   
  this.data = data;
  // console.log( this.data );
  }
  componentWillMount(){
    window.addEventListener( "tocuhmove", function( event ){  
      event.preventDefault()
    } )
    this.dataArrange(); 
  }

  componentWillUpdate(){
    this.dataArrange();
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
        <div className="wechat-bav">
          <div className="wechat-bav-name">通讯录</div>
          <div className="wechat-bav-add"><Link to="/add"><span className="wechat-bav-address"></span></Link></div>
          <div className="search-bar" style={{marginTop: '50px'}}>
            <input defaultValue="" onChange={ this.onSearch.bind( this ) } type="text" id="findBtn" placeholder="Search for task..." />
          </div>
        </div>
        <div className="wechat-container">
          <div className="container-list">
            {
              this.data.map((item,index)=>
                <div key={index}>
                  <div className="ioslist-group-container" style={{top: '22px'}}>
                    <div className="ioslist-group-header">{ item.firstName }</div>
                    <ul>
                      { item.items.map( ( item, index ) => <li key={ index }><span className="ioslist-span" style={{backgroundImage: `url(${item.logo})`}}></span><Link to={ `/detail/${ item.id }` } activeClassName="active">{ item.name }</Link></li> ) }
                    </ul>  
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="wechat-dock">
          <ul>
            <li className="wechat-dock-item1"><span className="wechat-dock-item1-span"><Link to="/Home"><p>微信</p></Link></span></li>
            <li className="wechat-dock-item2"><span className="wechat-dock-item2-span" style={{backgroundColor:'#62E460'}}><Link to="/Addresslist"><p>通讯录</p></Link></span></li>
            <li className="wechat-dock-item3"><span className="wechat-dock-item3-span"><Link to="/Discovrery"><p>发现</p></Link></span></li>
            <li className="wechat-dock-item4"><span className="wechat-dock-item4-span"><Link to="/Oneself"><p>我</p></Link></span></li>
          </ul>
        </div>
      </div>
    );
  }
}