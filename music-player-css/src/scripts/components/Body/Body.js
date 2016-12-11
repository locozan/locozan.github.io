import React from 'react';
import { render } from 'react-dom';
import Component from "../../libs/Component.js";
import "./Body.css";

export default class Body extends Component {
  constructor( props ){
    super( props );

  }

  render(){
    return (
      <div className="init-bodys" style={{height:"75%" }}>
        <div className="bodys" style={{height:"100%" }}>
          <div className="bodys-list">
            <div>
              <span>推荐</span>
              <ul>
                <li>发现音乐</li>
                <li>私人FM</li>
                <li>MV</li>
                <li>朋友</li>
              </ul>
            </div>
            <div>
              <span>我的音乐</span>
              <ul>
                <li>私人FM</li>
                <li>MV</li>
                <li>朋友</li>
              </ul>
            </div>
            <div>
              <span>创建的歌单</span>
              <ul>
                <li>私人FM</li>
                <li>MV</li>
                <li>朋友</li>
              </ul>
            </div>
            <div>
              <span>收藏歌单</span>
              <ul>
                <li>Memory</li>
                <li>Don'T Cry For Me</li>
                <li>Yesterday</li>
              </ul>
            </div>
          </div>
          <div className="bodys-content">
            <div className="bodys-content-nav">
              <ul>
                <li>推荐</li>
                <li>歌单</li>
                <li>主播电台</li>
                <li>最新音乐</li>
                <li>MV</li>
              </ul>
            </div>
            <div className="bodys-content-db">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="bodys-content-db-span"><span>热门精选</span></div>
            <div className="bodys-content-db">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="bodys-bar">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="bodys-set-nav">
          <div>
            <ul>
              <li>♡我喜欢</li>
              <li>≡歌单</li>
              <li>↓下载</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>❖本地音乐</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>♪乐库</li>
              <li>☋电台</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>✄工具</li>
              <li>Ю推广</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}