import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
    Tooltip,
    Legend
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels =  ['fat', 'carbs', 'protein'];

  interface ChartProps {
    foodData: {
      fat: number;
      carbs: number;
      protein: number
    }
  }

  const MacrosChart:React.FunctionComponent<ChartProps> = ( {foodData} ) => {
    console.log(foodData.fat, foodData.carbs, foodData.protein)
    const data = {
      labels,
      datasets: [
        {
          label: "# of grams",
          data: [ foodData.fat, foodData.carbs, foodData.protein],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        }
      ]
    };


    return <Bar className="macros-chart" options={options} data={data} />;
  }

  export default MacrosChart;
  