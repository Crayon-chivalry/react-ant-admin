import { useEffect, useRef } from 'react';

import * as echarts from 'echarts';

import styles from '../index.module.scss'

const VisitorSection = () => {
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
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        bottom: '0%'
      },
      grid: {
        top: '5%',
        left: '3%',
        right: '3%',
        bottom: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '老客户',
          type: 'line',
          smooth: true,
          symbol: 'none',
          data: [110, 134, 140, 110, 60, 120, 130],
          itemStyle: { color: '#EF4444' },
          lineStyle: { 
            width: 4
          }
        },
        {
          name: '新客户',
          type: 'line',
          smooth: true,
          symbol: 'none',
          data: [100, 114, 80, 96, 115, 140, 108],
          itemStyle: { color: '#3CD856' },
          lineStyle: { 
            width: 4
          }
        }
      ]
    };

    chart.setOption(option);
  }

  return (
    <div className={styles["app-card"]}>
      <div className={styles["app-card-header"]}>
        <div className={styles["app-card-title"]}>游客观察</div>
      </div>
      <div className={styles['visitor-chart']} ref={chartRef} />
    </div>
  );
};

export default VisitorSection;
