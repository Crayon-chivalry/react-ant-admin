import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { StarOutlined } from '@ant-design/icons';

import styles from './index.module.scss'

const { Header, Sider, Content } = Layout;

const items = [
  {
    key: 'sub1',
    label: '控制面板',
    icon: <StarOutlined />
  },
  {
    key: '会员中心',
    label: 'Navigation Two',
    icon: <StarOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  }
]

const MainLayout = () => {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={false} className={styles['sider']}>
        <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
      </Sider>
      <Layout>
        <Header className={styles['header']}>
          Header
        </Header>
        <Content className={styles['content']}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout