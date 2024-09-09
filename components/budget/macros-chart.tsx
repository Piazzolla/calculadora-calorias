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

  import styles from '../../styles/MacrosChart.module.css'
  
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
        display: false,
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
    },
    showCalories: boolean;
  }

  const MacrosChart:React.FunctionComponent<ChartProps> = ( {foodData, showCalories} ) => {
    console.log(foodData.fat, foodData.carbs, foodData.protein)
    const data = {
      labels,
      datasets: [
        {
          label: showCalories? "% of Calories": "# of grams",
          data: [ foodData.fat, foodData.carbs, foodData.protein],
          backgroundColor: "rgba(197, 81, 59, 0.2)",
        }
      ]
    };


    return <Bar className={styles["macros-chart"]} options={options} data={data} />;
  }

  export default MacrosChart;
  