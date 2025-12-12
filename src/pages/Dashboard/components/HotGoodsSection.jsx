import styles from '../index.module.scss'

const columns = ['#', '主图', '名称', '单价', '销售额']
const data = [
  {
    id: '1',
    index: 1,
    name: '小米17 pro max',
    price: '5999',
    sales: '9999'
  },
  {
    id: '2',
    index: 2,
    name: '小米17',
    price: '4999',
    sales: '3250'
  },
  {
    id: '3',
    index: 3,
    name: '小米17 pro',
    price: '5699',
    sales: '4299'
  },
  {
    id: '4',
    index: 4,
    name: '小米17 pro',
    price: '5699',
    sales: '4299'
  },
  {
    id: '5',
    index: 5,
    name: '小米17 pro',
    price: '5699',
    sales: '4299'
  },
  {
    id: '6',
    index: 6,
    name: '小米17 pro',
    price: '5699',
    sales: '4299'
  }
]

const HotGoodsSection = () => {
  return (
    <div className={`${styles['app-card']} ${styles['hot-goods']}`}>
      <div className={styles["app-card-header"]}>
        <div className={styles["app-card-title"]}>热门商品</div>
      </div>
      {/* <Table columns={columns} dataSource={data} pagination={false} scroll={{ y: 55 * 7 }} /> */}
      <div className={styles['table']}>
        <div className={`${styles['th']} ${styles['tr']}`}>
          {columns.map((item, index) => (
            <div key={index} className={styles['td']}>{ item }</div>
          ))}
        </div>
        <div className={styles['table-scroll']}>
          {data.map(item => (
            <div className={styles['tr']}>
              <div className={styles['td']}>{ item.id }</div>
              <div className={styles['td']}>-</div>
              <div className={styles['td']}>{ item.name }</div>
              <div className={styles['td']}>{ item.price }</div>
              <div className={styles['td']}>{ item.sales }</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HotGoodsSection