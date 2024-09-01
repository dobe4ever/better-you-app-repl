// src/pages/Stats.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function Stats() {
  // Mock data for visualizations
  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Habit Completion',
      data: [1, 1, 0, 1, 1, 0, 1],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }]
  };

  const monthlyData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Completion Rate',
      data: [5, 6, 4, 7],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }]
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Your Habit Stats</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-orange-500">Weekly Progress</h2>
          <Line 
            data={weeklyData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 1,
                  ticks: {
                    stepSize: 1
                  }
                }
              }
            }}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-orange-500">Monthly Overview</h2>
          <Bar 
            data={monthlyData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  max: 7
                }
              }
            }}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Overall Stats</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-orange-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-orange-600">14</p>
            <p className="text-sm text-orange-800">Current Streak</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-green-600">21</p>
            <p className="text-sm text-green-800">Longest Streak</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-blue-600">85%</p>
            <p className="text-sm text-blue-800">Completion Rate</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-purple-600">45</p>
            <p className="text-sm text-purple-800">Total Completions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;