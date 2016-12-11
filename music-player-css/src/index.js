import React from 'react';
import { render } from 'react-dom';
import Component from "./scripts/libs/Component.js";
import Main from "./scripts/libs/Main.js";

import Head from "../src/scripts/components/Head";
import Body from "../src/scripts/components/Body";
import Foot from "../src/scripts/components/Foot";

Component.initSharedState( {
  message: [
    {  },
    {  }
  ] 
});
// export default class Home extends Component {
//   constructor( props ){
//     super( props );
//   }


//   componentWillMount(){
//     let screenWidth = document.documentElement.clientWidth;
//     let screenHeight = document.documentElement.clientHeight;
//     document.querySelector( '.music-box' ).style.height = screenHeight;
//     document.querySelector( '.music-box' ).style.width = screenWidth;
//   }

//   render(){
//     return (
//       <div>
//         <Head />
//         <Body />
//         <Foot />
//       </div>
//     );
//   }

// }


render(
  <div style={{height:'100%'}}>
    <Head />
    <Body />
    <Foot />
  </div>,document.querySelector( '.music-box' ))
