import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import eChart from "./configs/eChart";

function EChart() {
  const { Title, Paragraph } = Typography;



  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={1}>Data Analysis</Title>
        <Paragraph className="lastweek">
           Reportbyte is an advanced business analytic and assistant system.It provides product recommendation,sales forecasting,data analysis type sevices.
        </Paragraph>

      </div>
    </>
  );
}

export default EChart;
