import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  } from "chart.js";
  import { Radar } from "react-chartjs-2";
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  
  export const data = {
    labels: ["Thing 1", "Thing 2", "Thing 3"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  };
  
  const MacrosChart = () => {
    return <Radar className="macros-chart" data={data} />;
  }

  export default MacrosChart;
  