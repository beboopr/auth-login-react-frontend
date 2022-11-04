import { Button, Form, Input, Layout } from "antd";

export default function Profile({ user }) {
  return (
    <Layout.Content style={{ padding: "50px" }}>
      <h1>Profile</h1>
      <Form 
      initialValues={user}
      labelCol={{ span: 8 }} 
      wrapperCol={{ span: 16 }}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  );
}
