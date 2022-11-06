/* eslint-disable prettier/prettier */
import { Button, Checkbox, Form, Input, Layout, Menu, MenuProps } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [getItem('Đăng ký', '1'), getItem('Đăng nhập', '2')];

export function LoginPage() {
  return (
    <>
      <Layout>
        <Sider>
          <Menu defaultOpenKeys={['sub1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 4 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 3 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Layout>
      </Layout>
    </>
  );
}
