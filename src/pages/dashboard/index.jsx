import Grid from '@mui/material/Grid';
import faker from 'faker';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';

import ErrorBoundary from '../../components/errorBoundary';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);
export const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};

export const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',

        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const barData = {
  labels,
  datasets: [
    {
      label: 'Coldfusion',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Javascript',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
};
export const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Bar Chart'
    }
  }
};
export const pieOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Pie Chart'
    }
  }
};
export const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Doughnut Chart'
    }
  }
};
export default function Dashboard() {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={4}>
        <ErrorBoundary fallbackMsg="Something error in Doughnut chart">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </ErrorBoundary>
      </Grid>
      <Grid item xs={12} md={4}>
        <ErrorBoundary fallbackMsg="Something error in Bar chart">
          <Bar options={barOptions} data={barData} />
        </ErrorBoundary>
      </Grid>
      <Grid item xs={12} md={4}>
        <ErrorBoundary fallbackMsg="Something error in PIE chart">
          <Pie data={pieData} options={pieOptions} />
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
}
