import React from 'react';
import { render } from 'react-dom';
import Component from "../libs/Component.js";

export default class Foot extends Component {
  constructor( props ){
    super( props );
  }

  render(){
    return (
      <div>
         {this.props.children}
      </div>
    );
  }
}