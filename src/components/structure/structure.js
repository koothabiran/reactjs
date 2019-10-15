import React, { Component } from 'react';
import { Layout } from 'antd';

import SiderMenuComponent from './repository-panel';
import HeaderComponent from './header';

import './structure.css';

const { Header, Sider, Content } = Layout;

class BLMStrutureComponent extends Component {
  render() {
    return (
      <div className="mainMenu">
        <Layout>
          <Header className="structure-header">                    
            <HeaderComponent />
          </Header>
          <Layout>
            <Sider className="structure-repository"><SiderMenuComponent /></Sider>
            <Content></Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BLMStrutureComponent;