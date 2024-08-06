import logo from './logo.svg';
import './App.scss';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import { Breadcrumb, Button, Col, Form, Grid, Input, Menu, Row } from 'antd';
import { AiOutlineQq, AiOutlineReconciliation, AiOutlineRadarChart } from "react-icons/ai";
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import { ProfileFilled } from '@ant-design/icons';
import { Card } from "antd";


const items1 = [ProfileFilled, 'Admin', ProfileFilled].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = [AiOutlineQq, AiOutlineReconciliation, AiOutlineRadarChart].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `Menu ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function App() {

  const [isBtnClicked, setIsButtonClicked] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo">LOGO</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Layout>
          <Sider
            width={280}
            style={{
              background: '#f0f6fc',
            }}
            collapsible
            collapsed={collapsed}
            onCollapse={(val) => {setCollapsed(val)}}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#f0f6fc',
              borderRadius: '5PX',
            }}
          >
            <div className='learner'>
              <h2 className='learner-container'>
                Learner Management
              </h2>
              <Button onClick={() => { setIsButtonClicked(!isBtnClicked) }}>Add Learner</Button>
            </div>
            {isBtnClicked && <Card>
                <Row>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      hasFeedback
                      label="Field A"
                      name="field_a"
                      validateTrigger="onBlur"
                      rules={[
                        {
                          max: 3,
                        },
                      ]}
                    >
                      <Input placeholder="Validate required onBlur" />
                    </Form.Item>
                  </Col>
                </Row>
            </Card>}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
