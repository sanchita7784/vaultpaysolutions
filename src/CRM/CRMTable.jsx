import React from 'react';

const CRMTable = () => {
  const crmData = [
    {
      id: 1,
      name: 'Raj Grover',
      email: 'rajgrover@example.com',
      status: 'Active',
      lastActivity: '2025-04-20',
    },
    {
      id: 2,
      name: 'Sam Paul',
      email: 'sampaul90@example.com',
      status: 'Pending',
      lastActivity: '2025-04-18',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.j@example.com',
      status: 'Inactive',
      lastActivity: '2025-04-15',
    },
    {
      id: 4,
      name: 'Bob Wilson',
      email: 'bob.wilson@example.com',
      status: 'Active',
      lastActivity: '2025-04-22',
    },
  ];

  return (
    <section
      className="bg-gradient-to-r from-black via-stone-800 to-black py-8 sm:py-12 md:py-16 lg:py-20"
      aria-labelledby="crm-table-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mt-20">
        <h2
          id="crm-table-heading"
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10 text-center"
        >
          ERP and CRM With Preserve Aesthetics
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 overflow-hidden">
          {/* Desktop/Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-700/50 text-gray-300 text-xs sm:text-sm md:text-base uppercase tracking-wide">
                  <th className="py-3 sm:py-4 px-4 sm:px-6">Name</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6">Email</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6">Status</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6">Last Activity</th>
                  <th className="py-3 sm:py-4 px-4 sm:px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                {crmData.map((entry) => (
                  <tr
                    key={entry.id}
                    className="border-t border-gray-700/50 text-gray-200 text-xs sm:text-sm md:text-base hover:bg-gray-700/30 transition-colors duration-200"
                  >
                    <td className="py-3 sm:py-4 px-4 sm:px-6">{entry.name}</td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6">{entry.email}</td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6">
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
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
                    <td className="py-3 sm:py-4 px-4 sm:px-6">{entry.lastActivity}</td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 flex space-x-2">
                      <button
                        className="px-2 sm:px-3 py-1 rounded-md bg-teal-400 text-gray-900 text-xs sm:text-sm font-semibold hover:bg-teal-300 transition-colors duration-200"
                        aria-label={`Edit ${entry.name}'s profile`}
                      >
                        Edit
                      </button>
                      <button
                        className="px-2 sm:px-3 py-1 rounded-md bg-red-400 text-gray-900 text-xs sm:text-sm font-semibold hover:bg-red-300 transition-colors duration-200"
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
          <div className="sm:hidden space-y-4 sm:space-y-6">
            {crmData.map((entry) => (
              <div
                key={entry.id}
                className="bg-gray-800/50 rounded-lg p-4 sm:p-5 border border-gray-700/50 hover:bg-gray-700/30 transition-colors duration-200"
                role="region"
                aria-labelledby={`mobile-entry-${entry.id}`}
              >
                <h3
                  id={`mobile-entry-${entry.id}`}
                  className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3"
                >
                  {entry.name}
                </h3>
                <div className="text-gray-300 text-xs sm:text-sm space-y-2 sm:space-y-3">
                  <p>
                    <span className="font-medium">Email:</span> {entry.email}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{' '}
                    <span
                      className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
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
                  <div className="flex space-x-2">
                    <button
                      className="px-3 sm:px-4 py-1 sm:py-2 rounded-md bg-teal-400 text-gray-900 text-xs sm:text-sm font-semibold hover:bg-teal-300 transition-colors duration-200"
                      aria-label={`Edit ${entry.name}'s profile`}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 sm:px-4 py-1 sm:py-2 rounded-md bg-red-400 text-gray-900 text-xs sm:text-sm font-semibold hover:bg-red-300 transition-colors duration-200"
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
      </div>
    </section>
  );
};

export default CRMTable;