import { Statistic } from 'antd';

import styles from '../index.module.scss'

const salesList = [
  { title: '总销量', amount: 10000, bgColor: '#FFE2E5'},
  { title: '总订单', amount: 300, bgColor: '#FFF4DE'},
  { title: '销售的产品', amount: 5, bgColor: '#DCFCE7'},
  { title: '新客户', amount: 8, bgColor: '#F3E8FF'}
]

const SalesSection = () => {
  return (
    <div className={styles["app-card"]}>
      <div className={styles["app-card-header"]}>
        <div className={styles["app-card-title"]}>销售额</div>
      </div>
      <div className={styles["sales"]}>
        {salesList.map((item, index) => (
          <div
            className={styles["sales-item"]}
            key={index}
            style={{ backgroundColor: item.bgColor }}
          >
            <img
              src={`/src/assets/images/sales${index + 1}.png`}
              className={styles["sales-icon"]}
            />
            <Statistic value={item.amount} className={styles["sales-amount"]} />
            <div>{item.title}</div>
            <div className={styles["sales-label"]}>+8% 比昨天增加</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesSection
