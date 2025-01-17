import { Line, Doughnut } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
  plugins,
  scales,
} from "chart.js";
import { orange, orangeLight, purple, purpleLight } from "../constants/color";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);


const labels=getLast7Days()
const lineChartOption = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};
const LineChart = ({value=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Messages",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
     
    ],
  };
  return (
    <Line data={data} options={lineChartOption}>
      Charts
    </Line>
  );
};


const dougntChartOption = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
   
  },

  cutout:120
 
};
const DoughnutChart = ({value=[],labels=[]}) => {

  const data = {
    labels,
    datasets: [
      {
        data: value,
        fill: true,
        backgroundColor: [purpleLight, orangeLight],
        hoverBackgroundColor:[purple,orange],
      
        borderColor: [purple, orange],
        offset:10
      },
     
    ],
  };
  return <Doughnut style={{zIndex:10}} data={data} options={dougntChartOption}/>;
};

export { LineChart, DoughnutChart };
