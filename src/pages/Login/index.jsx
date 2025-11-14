import styles from "./index.module.scss";

import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  const onFinish = () => {};

  return (
    <div className={styles["page"]}>
      <div className={styles["card"]}>
        <div className={styles["title"]}>欢迎登录系统平台</div>
        <div className={styles["label"]}>Welcome</div>
        <div className={styles["form"]}>
          <Form name="basic" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入账号" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="请输入账号" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入登录密码" }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="请输入登录密码" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                className={styles["submit-btn"]}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
