// import React from "react";
// import { Router, Route, Link } from 'react-router';
// import Component from "../../libs/Component.js";

// export default class SearchText extends Component {
//   constructor( props ){
//     super( props );
//     this.importSharedState( 'list','searchText' );
//     // this.state = { value: null }
//   }

//   doSave(){
    
//     this.updateSharedState( 'list' );
//     location.hash = '/add';
//   }
//   componentDidMount(){
//     let btns = this.refs.btns;
//     btns.focus();
//   }
//   onSearch( event ){
//     let {value} = event.target;
//     this.sharedState.searchText = value;
//     this.updateSharedState( 'searchText' );
//       // this.setState( { value: value } )
//   }

//   render(){
//     var escapeRegexp = function(s){
//        return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
//     };
//     let value = escapeRegexp( this.sharedState.searchText )
//     return (
//       <div>
//         <div className="nav-bar">
//           <ul>
//             <li className="return">
//               <Link to="">返回</Link>
//             </li>
//             <li className="all">所有联系人</li>
//             <li className="increase">
//               <a onClick={ this.doSave.bind( this ) }>添加</a>
//             </li>
//           </ul>
//         </div>
//         <div className="search-bar">
//           <div className="search">
//             <input type="text" onChange={this.onSearch.bind( this )} ref="btns" id="findBtn" placeholder="Search for task..." />
//           </div>
//         </div>
//         <div className="communication-list">
//           <div id="list1">
//             <div>
//               <div className="ioslist-group-container">
//                 <div className="ioslist-group-header"></div>
//                 <ul>
//                   {
//                     this.sharedState.list.map( (item, index) =>{
//                       if( ~item.name.toLowerCase().indexOf( value.toLowerCase()) ){
//                         return <li key={ index }><Link to={ `/detail/${ item.id }` } activeClassName="active">{ item.name }</Link></li>
//                       }
//                     } )
//                   }
//                 </ul>  
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//<ul>
//   {
//     this.sharedState.list.map( (item, index) =>{
//       if( ~item.name.indexOf( this.state.value ) ){
//         return <li key={ index }><Link to={ `/detail/${ item.id }` } activeClassName="active">{ item.name }</Link></li>
//       }
//     } )
//   }
// </ul>