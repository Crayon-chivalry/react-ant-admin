import { Button } from 'antd';

import styles from '../index.module.scss'

const statusList = [
  {title: '待发货', value: 10, url: ''},
  {title: '已发货', value: 10, url: ''},
  {title: '售后', value: 10, url: ''},
  {title: '已完成', value: 10, url: ''},
]

const OrderSection = () => {
  return (
    <div className={styles['app-card']}>
      <div className={styles["app-card-header"]}>
        <div className={styles["app-card-title"]}>订单状态</div>
      </div>
      <div className={styles['order']}>
        {statusList.map((item, index) => 
          <div className={styles['order-item']} key={index}>
            <img src={`/src/assets/images/order-status${index+1}.png`} className={styles['order-icon']} />
            <div>{ item.title }</div>
            <div>{ item.value }</div>
            <Button color="primary" variant="outlined" size='small'>
              查看
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderSection