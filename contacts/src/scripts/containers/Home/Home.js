import React from 'react';
import { render } from 'react-dom';
import Component from "../../libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';


export default class Home extends Component {
  constructor( props ){
    super( props );

  }


  render(){
    return (
      <div>
        { this.props.children }
      </div>    
    );
  }
}
