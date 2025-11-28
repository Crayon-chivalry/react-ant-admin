import { Col, Row } from "antd";

import {
  SalesSection,
  VisitorSection,
  OrderSection,
  HotGoodsSection,
  IncomeSection,
  PaymentSection,
} from "./components";

const Dashboard = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={14}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              {/* 销售额 */}
              <SalesSection />
            </Col>
            <Col span={24}>
              <IncomeSection />
            </Col>
            <Col span={14}>
              {/* 订单状态 */}
              <OrderSection />
            </Col>
            <Col span={10}>
              {/* 支付方式 */}
              <PaymentSection />
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <Row gutter={[0, 16]}>
            <Col span={24}>
              {/* 访问量 */}
              <VisitorSection />
            </Col>
            <Col span={24}>
              {/* 热门商品 */}
              <HotGoodsSection />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
