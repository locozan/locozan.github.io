import React from "react";
import ReactDOM from "react-dom";
import Component from "./scripts/libs/Component";

import Home from './scripts/containers/Home';

Component.initSharedState( {
  robot: [
    { value: '你说什么？我不太明白你说的话？' },
    { value: '我是一个机器人，开心的机器人？' },
    { value: '今天天气真好，你心情好吗？' },
    { value: '机器人有什么可以帮你的吗？' }
  ],

  log: []
} );

ReactDOM.render(
  <Home />,
  document.querySelector( '.device' )
);
