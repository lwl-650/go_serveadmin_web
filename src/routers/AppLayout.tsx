import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import {routers} from "./Index"

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh'}}>
        <div className="demo-logo-vertical" />
        <h1 style={{color:"#fff"}}>serveAdmin-web</h1>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={routers}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
          }}    
        >
         <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;