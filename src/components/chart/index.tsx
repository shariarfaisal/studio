import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { isEmpty } from 'lodash';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

export interface ChartJson {
  type: 'bar' | 'line' | 'pie' | 'doughnut';
  data: ChartData;
}

interface Props {
  content: ChartJson;
}

export const Chart = ({ content }: Props) => {
  const { data, type } = content;

  if (!type && isEmpty(data)) return 'No data available';

  switch (type) {
    case 'bar':
      return <Bar data={data} />;
    case 'line':
      return <Line data={data} />;
    case 'pie':
      return <Pie data={data} />;
    case 'doughnut':
      return <Doughnut data={data} />;
    default:
      return <Bar data={data} />; // Default to Bar chart if type is unknown
  }
};
