import { Button, Checkbox, Form, Input, Row, Col, Select, DatePicker } from "antd";

import styles from "./index.module.scss";

const filterList = [
  {
    label: "商品名称",
    key: "userid",
    placeholder: "请输入商品名称",
    value: "",
    type: "input",
    vague: true,
  },
  {
    label: "商品编号",
    key: "number",
    placeholder: "请输入商品编号",
    value: "",
    type: "input",
  },
  {
    label: "状态",
    key: "state",
    placeholder: "请选择状态",
    value: 0,
    type: "select",
    options: [
      { label: "全部", value: 0 },
      { label: "在售中", value: 1 },
      { label: "已下架", value: 2 },
    ],
  },
  {
    label: "创建时间",
    key: "date",
    value: "",
    type: "date",
  },
];

const TableFiltering = () => {
  return (
    <div className={`${styles["table-filtering"]} ${styles["app-card"]}`}>
      <Form>
        <Row gutter={24}>
          {filterList.map(item => (
            <Col span={6} key={item.key}>
              <Form.Item
                label={item.label}
                name={item.value}
                rules={[{ required: true, message: item.placeholder }]}
              >
                {item.type === "input" && <Input placeholder={item.placeholder} />}
                {item.type === "select" && <Select options={item.options} />}
                {item.type === "date" && <DatePicker />}
              </Form.Item>
            </Col>
          ))}
          <Col span={6}>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TableFiltering;
