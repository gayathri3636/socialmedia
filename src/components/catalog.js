import React from "react";
import { Card, Row, Col, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./catalog.css";
import Background from "../images/HTML5_Logo_200.png";
const { Header, Content, Footer, Sider } = Layout;

export default function Catalog() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">HTML</Menu.Item>
          <Menu.Item key="2">CSS</Menu.Item>
          <Menu.Item key="3">Javascript</Menu.Item>
          <Menu.Item key="4">ReactJS</Menu.Item>
          <Menu.Item key="5">Redux</Menu.Item>
          <Menu.Item key="6">NodeJS</Menu.Item>
          <Menu.Item key="6">Python</Menu.Item>
          <Menu.Item key="6">Express</Menu.Item>
          <Menu.Item key="6">Express</Menu.Item>
          <Menu.Item key="6">Express</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0 " }}>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  title="course"
                  style={{
                    backgroundColor: "#b5e7a0",
                  }}
                  bordered={false}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="course"
                  style={{
                    backgroundColor: "#eca1a6",
                  }}
                  bordered={true}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Career path"
                  style={{
                    backgroundColor: "#e06377",
                  }}
                  bordered={true}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Career path"
                  style={{
                    backgroundColor: "#5b9aa0",
                  }}
                  bordered={true}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Career path"
                  style={{
                    backgroundColor: "#f2e394",
                  }}
                  bordered={true}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Career path"
                  style={{
                    backgroundColor: "#ff6f69",
                  }}
                  bordered={true}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Career path"
                  style={{
                    backgroundColor: "#a2836e",
                  }}
                  bordered={true}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Career path"
                  style={{
                    backgroundColor: "#c0ded9",
                  }}
                  bordered={true}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Career path"
                  style={{
                    backgroundColor: "#80ced6",
                  }}
                  bordered={true}
                >
                  <h6>Learn basics of React</h6>
                  Learn React from scratch
                </Card>
              </Col>
            </Row>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
