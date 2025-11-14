import { Table } from 'antd';

import styles from './index.module.scss'

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index'
  },
  {
    title: '主图',
    dataIndex: 'cover',
    key: 'cover'
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '销售额',
    dataIndex: 'sales',
    key: 'sales'
  }
]

const data = [
  {
    key: '1',
    index: 1,
    name: '小米17 pro max',
    price: '5999',
    sales: '9999'
  },
  {
    key: '2',
    index: 2,
    name: '小米17',
    price: '4999',
    sales: '3250'
  },
  {
    key: '3',
    index: 3,
    name: '小米17 pro',
    price: '5699',
    sales: '4299'
  }
]

const HotGoodsSection = () => {
  return (
    <div className={styles['app-card']}>
      <div className={styles["app-card-header"]}>
        <div className={styles["app-card-title"]}>热门商品</div>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  )
}

export default HotGoodsSection