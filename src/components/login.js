import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import 'antd/dist/antd.css';
import "./login.css"
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function LoginScreen() {
  const [logins, setLogins] = useState({
    email: "",
    password:""
  })
  const onFinish = (value) => {
    console.log("Received values of form: ", logins);
  };

  return (
    <>
    <h1 className = "hlogin">Login</h1>
    <div className="login-form"
    >
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          value = {logins.email}
          onChange = {(value) => ({...logins, email: value.target.value })}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value = {logins.password}
          onChange = {(value) => ({...logins, password: value.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" onClick = {onFinish} className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
    </>
  );
}
