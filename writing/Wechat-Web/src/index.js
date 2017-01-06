import React from 'react';
import { render } from 'react-dom';
import Component from "./scripts/libs/Component.js";
import { Router, Route, Link, hashHistory, IndexRoute, Redirect } from 'react-router';
// import "./index.scss";

import Foot from "../src/scripts/containers/Root.js";
import Home from "../src/scripts/components/Home";
import Addinput from "../src/scripts/components/Addinput";
import Addresslist from "../src/scripts/components/Addresslist";
import Discovrery from "../src/scripts/components/Discovrery";
import JumpPage from "../src/scripts/components/JumpPage";
import Oneself from "../src/scripts/components/Oneself";
import Dialogue from "../src/scripts/components/Dialogue";
import DetailedData from "../src/scripts/components/DetailedData";

Component.initSharedState( {
  list:[
    { id:'1',logo:'images/group.png',title:'四人帮',message:'最新消息',time:'10:11' },
    { id:'2',logo:'images/users.png',title:'好友群',message:'内容简介',time:'昨天' }
   ],
  friends:[
    { id: "1", logo:'images/group.png', name: "张翠花", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "2", logo:'images/users.png', name: "栏振华", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "3", logo:'images/group.png', name: "周小妹", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "4", logo:'images/users.png', name: "郑正董", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "5", logo:'images/group.png', name: "王先生", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "6", logo:'images/users.png', name: "周十大", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "7", logo:'images/group.png', name: "李哦", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "8", logo:'images/users.png', name: "周振华", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "9", logo:'images/group.png', name: "倪阿达", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "10", logo:'images/users.png', name: "周正董", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "11", logo:'images/users.png', name: "周先生", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "12", logo:'images/group.png', name: "李翠", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "13", logo:'images/users.png', name: "周振华", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "14", logo:'images/group.png', name: "倪小妹", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "15", logo:'images/users.png', name: "说得对", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "16", logo:'images/users.png', name: "非法啊", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "17", logo:'images/group.png', name: "氨基酸", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "18", logo:'images/users.png', name: "郑华", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "19", logo:'images/group.png', name: "倪军", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "20", logo:'images/users.png', name: "正董", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "21", logo:'images/users.png', name: "周出生", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "22", logo:'images/group.png', name: "李李兰", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "23", logo:'images/users.png', name: "吴征凭栏", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "24", logo:'images/group.png', name: "张飞", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "25", logo:'images/users.png', name: "曹操", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "26", logo:'images/users.png', name: "李白", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "27", logo:'images/group.png', name: "李弄", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "28", logo:'images/users.png', name: "晒钱是", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "29", logo:'images/group.png', name: "啊实打", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "30", logo:'images/users.png', name: "周阿萨", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "31", logo:'images/users.png', name: "AASD", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "32", logo:'images/group.png', name: "李窝", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "33", logo:'images/users.png', name: "KIIS", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "34", logo:'images/group.png', name: "MZJZ", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "35", logo:'images/users.png', name: "暗色调", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "36", logo:'images/users.png', name: "莫莫莫", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "37", logo:'images/group.png', name: "李哦", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "39", logo:'images/group.png', name: "没有啊", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "40", logo:'images/users.png', name: "vwl", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "41", logo:'images/users.png', name: "来爬山", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "42", logo:'images/group.png', name: "李宽", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "43", logo:'images/users.png', name: "真可爱", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "44", logo:'images/group.png', name: "略其实", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "45", logo:'images/users.png', name: "埋藏在", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "46", logo:'images/users.png', name: "晚上", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "47", logo:'images/group.png', name: "美丽", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "48", logo:'images/users.png', name: "娃娃", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "49", logo:'images/group.png', name: "楼号", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "50", logo:'images/users.png', name: "哦", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "51", logo:'images/users.png', name: "频繁时", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "52", logo:'images/group.png', name: "啊实打", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "53", logo:'images/users.png', name: "们还为", region: "浙江", call: "123456",remark:'备注',more:"更多" },
    { id: "54", logo:'images/group.png', name: "破气温", region: "福建", call: "123456",remark:'备注',more:"更多" },
    { id: "55", logo:'images/users.png', name: "不大啊", region: "浙江", call: "123456",remark:'备注',more:"更多" }
   ],
  robot: [
    { value: '你说什么？我不太明白你说的话？' },
    { value: '我是一个机器人，开心的机器人？' },
    { value: '我只是个机器人哦' },
    { value: '主人的要求好过分哦！' },
    { value: '主人，机器人办不到啊！' },
    { value: '主人你要就寝了吗？' },
    { value: '机器人不大明白诶！' },
    { value: '机器人想出去走走！' },
    { value: '心情不好，想吃东西' },
    { value: '来吧，主人，揉捏我吧。' }
  ],
  oneself:[{ id: "0", logo:'/images/pic.jpg', name: "locozan", region: "福建", call: "hzz520134134",remark:'备注',more:"更多" }],
  log: [],
  searchText:''

});


render((
  <Router history={ hashHistory }>
    <Route path="/" component={ Foot }>
      <IndexRoute component={ Home } />
      <Route path="Home" component={ Home }/>
      <Route path="add" component={ DetailedData }/>
      <Route path="Discovrery" component={ Discovrery }/>
      <Route path="Oneself" component={ Oneself }/>
      <Route path="JumpPage" component={ JumpPage }/>
      <Route path="Addresslist" component={ Addresslist }/>
      <Route path="Dialogue" component={ Dialogue }/>
      <Route path="edit/:id" component={ DetailedData }/>
      <Route path="detail/:id" component={ Addinput } />
    </Route>
  </Router>),document.querySelector( '.wechat' ))


