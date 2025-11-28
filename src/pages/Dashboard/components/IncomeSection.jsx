import { useEffect, useRef } from 'react';

import * as echarts from 'echarts';

import styles from '../index.module.scss'

const IncomeSection = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    initChart()

    // 响应式与卸载清理
    const handleResize = () => {
      if (chartInstanceRef.current) chartInstanceRef.current.resize(); console.log('resize')
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
        chartInstanceRef.current = null;
      }
    }
  }, [])

  const initChart = () => {
    const chart = echarts.init(chartRef.current);
    chartInstanceRef.current = chart;

    const option = {
      tooltip: {},
      grid: {
        top: '5%',
        left: '3%',
        right: '3%',
        bottom: '15%',
        containLabel: true
      },
      legend: {
        bottom: '0%'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '在线销售',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            color: '#0095FF',
            borderRadius: 6
          }
        },
        {
          name: '线下销售',
          data: [130, 220, 120, 83, 45, 130, 110],
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            color: '#00E096',
            borderRadius: 6
          }
        }
      ]
    };

    chart.setOption(option);
  }

  return (
    <div className={styles["app-card"]}>
      <div className={styles["app-card-header"]}>
        <div className={styles["app-card-title"]}>收入</div>
      </div>
      <div className={styles['income-chart']} ref={chartRef} />
    </div>
  );
};

export default IncomeSection;
