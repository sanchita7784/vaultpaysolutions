import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CRMDashboard = () => {
  const crmData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active', lastActivity: '2025-04-20' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Pending', lastActivity: '2025-04-18' },
    { id: 3, name: 'Alice Johnson', email: 'alice.j@example.com', status: 'Inactive', lastActivity: '2025-04-15' },
    { id: 4, name: 'Bob Wilson', email: 'bob.wilson@example.com', status: 'Active', lastActivity: '2025-04-22' },
    { id: 4, name: 'Smith Wilson', email: 'smith.wilson@example.com', status: 'Pending', lastActivity: '2025-04-22' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Pending', lastActivity: '2025-04-18' },
    { id: 3, name: 'Alice Johnson', email: 'alice.j@example.com', status: 'Inactive', lastActivity: '2025-04-15' },
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active', lastActivity: '2025-04-20' },
    { id: 4, name: 'Bob Wilson', email: 'bob.wilson@example.com', status: 'Active', lastActivity: '2025-04-22' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Pending', lastActivity: '2025-04-18' },
    { id: 3, name: 'Alice Johnson', email: 'alice.j@example.com', status: 'Inactive', lastActivity: '2025-04-15' },
    { id: 4, name: 'Bob Wilson', email: 'bob.wilson@example.com', status: 'Active', lastActivity: '2025-04-22' },
    { id: 4, name: 'Smith Wilson', email: 'smith.wilson@example.com', status: 'Pending', lastActivity: '2025-04-22' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Pending', lastActivity: '2025-04-18' },
    { id: 3, name: 'Alice Johnson', email: 'alice.j@example.com', status: 'Inactive', lastActivity: '2025-04-15' },
  ];

  // Bar Chart Data
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Active Users',
        data: [120, 150, 180, 200],
        backgroundColor: 'rgba(45, 212, 191, 0.5)',
        borderColor: 'rgba(45, 212, 191, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data
  const pieData = {
    labels: ['Active', 'Pending', 'Inactive'],
    datasets: [
      {
        data: [
          crmData.filter((entry) => entry.status === 'Active').length,
          crmData.filter((entry) => entry.status === 'Pending').length,
          crmData.filter((entry) => entry.status === 'Inactive').length,
        ],
        backgroundColor: ['rgba(45, 212, 191, 0.7)', 'rgba(234, 179, 8, 0.7)', 'rgba(239, 68, 68, 0.7)'],
        borderColor: ['rgba(45, 212, 191, 1)', 'rgba(234, 179, 8, 1)', 'rgba(239, 68, 68, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#D1D5DB', // Gray-300 for text
          font: { size: 10, family: 'Inter, sans-serif' },
        },
        position: 'bottom',
      },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 55, 0.8)', // Gray-800
        titleFont: { size: 12 },
        bodyFont: { size: 10 },
      },
    },
    scales: {
      x: { ticks: { color: '#D1D5DB', font: { size: 10 } }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
      y: { ticks: { color: '#D1D5DB', font: { size: 10 } }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <section
      className="bg-gradient-to-r from-black via-stone-800 to-black py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden"
      aria-labelledby="crm-dashboard-heading"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-20">
        <h2
          id="crm-dashboard-heading"
          className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center"
        >
          CRM Dashboard With<br></br>
          <p className='text-yellow-600'>Sorting,Filtering,Interactivity</p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Table */}
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 overflow-hidden">
            {/* Desktop/Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-700/50 text-gray-300 text-xs sm:text-sm uppercase tracking-wide">
                    <th className="py-2 sm:py-3 px-3 sm:px-4">Name</th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4">Email</th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4">Status</th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4">Last Activity</th>
                    <th className="py-2 sm:py-3 px-3 sm:px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {crmData.map((entry) => (
                    <tr
                      key={entry.id}
                      className="border-t border-gray-700/50 text-gray-200 text-[0.65rem] sm:text-xs md:text-sm hover:bg-gray-700/30 transition-colors duration-200"
                    >
                      <td className="py-2 sm:py-3 px-3 sm:px-4">{entry.name}</td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 truncate max-w-[120px] sm:max-w-[200px]">
                        {entry.email}
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4">
                        <span
                          className={`inline-block px-1 sm:px-2 py-0.5 rounded-full text-[0.65rem] sm:text-xs ${
                            entry.status === 'Active'
                              ? 'bg-teal-500/20 text-teal-400'
                              : entry.status === 'Pending'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {entry.status}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4">{entry.lastActivity}</td>
                      <td className="py-2 sm:py-3 px-3 sm:px-4 flex space-x-1 sm:space-x-2">
                        <button
                          className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-md bg-teal-400 text-gray-900 text-[0.65rem] sm:text-xs font-semibold hover:bg-teal-300 transition-colors duration-200"
                          aria-label={`Edit ${entry.name}'s profile`}
                        >
                          Edit
                        </button>
                        <button
                          className="px-1 sm:px-2 py-0.5 sm:py-1 rounded-md bg-red-400 text-gray-900 text-[0.65rem] sm:text-xs font-semibold hover:bg-red-300 transition-colors duration-200"
                          aria-label={`Delete ${entry.name}'s profile`}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-3 sm:space-y-4 p-3 sm:p-4">
              {crmData.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:bg-gray-700/30 transition-colors duration-200"
                  role="region"
                  aria-labelledby={`mobile-entry-${entry.id}`}
                >
                  <h3
                    id={`mobile-entry-${entry.id}`}
                    className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2"
                  >
                    {entry.name}
                  </h3>
                  <div className="text-gray-300 text-[0.65rem] sm:text-xs space-y-1 sm:space-y-2">
                    <p className="truncate">
                      <span className="font-medium">Email:</span> {entry.email}
                    </p>
                    <p>
                      <span className="font-medium">Status:</span>{' '}
                      <span
                        className={`inline-block px-1 sm:px-2 py-0.5 rounded-full text-[0.65rem] sm:text-xs ${
                          entry.status === 'Active'
                            ? 'bg-teal-500/20 text-teal-400'
                            : entry.status === 'Pending'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}
                      >
                        {entry.status}
                      </span>
                    </p>
                    <div className="flex space-x-1 sm:space-x-2">
                      <button
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-teal-400 text-gray-900 text-[0.65rem] sm:text-xs font-semibold hover:bg-teal-300 transition-colors duration-200"
                        aria-label={`Edit ${entry.name}'s profile`}
                      >
                        Edit
                      </button>
                      <button
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-red-400 text-gray-900 text-[0.65rem] sm:text-xs font-semibold hover:bg-red-300 transition-colors duration-200"
                        aria-label={`Delete ${entry.name}'s profile`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Charts */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {/* Bar Chart */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 p-3 sm:p-4 md:p-6">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">
                Monthly Active Users
              </h3>
              <div className="w-full h-[150px] xs:h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
                <Bar data={barData} options={chartOptions} />
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 p-3 sm:p-4 md:p-6">
              <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">
                Status Distribution
              </h3>
              <div className="w-full h-[150px] xs:h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] flex justify-center">
                <div className="w-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px]">
                  <Pie data={pieData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMDashboard;