import { useEffect, useRef } from "react";

import * as echarts from "echarts";

import styles from "../index.module.scss";

const PaymentSection = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    initChart();

    // 响应式与卸载清理
    const handleResize = () => {
      if (chartInstanceRef.current) chartInstanceRef.current.resize();
      console.log("resize");
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  const initChart = () => {
    const chart = echarts.init(chartRef.current);
    chartInstanceRef.current = chart;

    const option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      color: ['#0A84FF', '#47DDB7'],
      series: [
        {
          type: "pie",
          radius: ['40%', '80%'],
          data: [
            { value: 1048, name: "支付宝" },
            { value: 484, name: "微信" }
          ]
        },
      ],
    };

    chart.setOption(option);
  };

  return (
    <div className={styles["app-card"]}>
      <div className={styles["app-card-header"]}>
        <div className={styles["app-card-title"]}>支付方式</div>
      </div>
      <div className={styles["payment-chart"]} ref={chartRef} />
    </div>
  );
};

export default PaymentSection;
