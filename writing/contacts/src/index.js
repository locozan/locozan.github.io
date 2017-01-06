import React from 'react';
import { render } from 'react-dom';
import Component from "./scripts/libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';

import Home from '../src/scripts/containers/Home/index.js';
import HomePage from '../src/scripts/components/HomePage/index.js';
import DetailedData from '../src/scripts/components/DetailedData/index.js';
import InformationInput from '../src/scripts/components/InformationInput/index.js';
// import SearchText from '../src/scripts/components/SearchText/index.js';

Component.initSharedState( {
  list: [
    { id: "1", photo: "xxx", name: "周小姐", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "2", photo: "xxx", name: "周小子", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "3", photo: "xxx", name: "周小妹", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "4", photo: "xxx", name: "周董", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "5", photo: "xxx", name: "王先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "6", photo: "xxx", name: "周先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "7", photo: "xxx", name: "郑先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "8", photo: "xxx", name: "黄先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "9", photo: "xxx", name: "李生生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "10", photo: "xxx", name: "李小姐", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "11", photo: "xxx", name: "李先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "12", photo: "xxx", name: "李总", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "13", photo: "xxx", name: "张生生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "14", photo: "xxx", name: "蓝先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "15", photo: "xxx", name: "林妹子", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "16", photo: "xxx", name: "张先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "17", photo: "xxx", name: "许妹子", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "18", photo: "xxx", name: "张先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "19", photo: "xxx", name: "关妹子", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "20", photo: "xxx", name: "张先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "21", photo: "xxx", name: "离妹子", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "22", photo: "xxx", name: "张先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "23", photo: "xxx", name: "肖妹子", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "24", photo: "xxx", name: "单先生", corporation: "没有", call: "123456", email: "123@123.com" },
    { id: "25", photo: "xxx", name: "张妹子", corporation: "没有", call: "123456", email: "123@123.com" }
  ],

  searchText: ''
} );

render(
  <Router history={ hashHistory }>
    <Route path="/" component={Home}>
      <IndexRoute component={HomePage} />
      <Route path="add" component={ InformationInput }/>
      <Route path="edit/:id" component={ InformationInput }/>
      <Route path="detail/:id" component={ DetailedData } />
    </Route>
  </Router>, document.querySelector( '.interface' ) );


