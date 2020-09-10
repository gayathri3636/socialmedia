import React from "react";
import { Card, Row, Col, Layout } from "antd";
import "antd/dist/antd.css";
import sider from "../components/sider";
const { Header, Content, Footer, Sider } = Layout;

export default function Catalog() {
  return (
    <Layout>
      <Sider />
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="course" bordered={true}>
              <h6>Learn basics of React</h6>
              Learn React from scratch
            </Card>
          </Col>
          <Col span={8}>
            <Card title="course" bordered={true}>
              <h6>Learn basics of React</h6>
              Learn React from scratch
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Career path" bordered={true}>
              <h6>Learn basics of React</h6>
              Learn React from scratch
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
