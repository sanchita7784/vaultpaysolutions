import { useState } from 'react';

const CompactERPDemo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-black via-stone-800 to-black">
      <div className="border rounded-lg shadow-lg overflow-hidden w-full max-w-4xl h-[500px] relative bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm p-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">ERP Dashboard</h1>
          <button onClick={toggleSidebar} className="text-gray-600 md:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </header>

        {/* Sidebar */}
        <div className={`absolute inset-y-0 left-0 w-48 bg-gray-800 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out z-10`}>
          <div className="p-3">
            <h2 className="text-xl font-bold">VSPL ERP System</h2>
          </div>
          <nav className="mt-2">
            <a href="#" className="block py-1 px-3 text-sm hover:bg-gray-700">Dashboard</a>
            <a href="#" className="block py-1 px-3 text-sm hover:bg-gray-700">Inventory</a>
            <a href="#" className="block py-1 px-3 text-sm hover:bg-gray-700">Orders</a>
            <a href="#" className="block py-1 px-3 text-sm hover:bg-gray-700">Reports</a>
          </nav>
        </div>

        {/* Main Content - Tightened layout */}
        <div className="md:ml-48 h-[calc(100%-50px)] overflow-y-auto p-3 flex flex-col gap-3">
          {/* Inventory Cards - Compact layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="bg-white p-2 rounded shadow-sm flex items-center">
              <div className="text-xl mr-2">📦</div>
              <div>
                <h3 className="text-xs font-semibold text-gray-700">Products</h3>
                <p className="text-base font-bold">1,234</p>
              </div>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex items-center">
              <div className="text-xl mr-2">⚠️</div>
              <div>
                <h3 className="text-xs font-semibold text-gray-700">Low Stock</h3>
                <p className="text-base font-bold">45</p>
              </div>
            </div>
            <div className="bg-white p-2 rounded shadow-sm flex items-center">
              <div className="text-xl mr-2">🏷️</div>
              <div>
                <h3 className="text-xs font-semibold text-gray-700">Categories</h3>
                <p className="text-base font-bold">12</p>
              </div>
            </div>
          </div>

          {/* Orders Table - Compact version */}
          <div className="bg-white p-2 rounded shadow-sm flex-1">
            <h3 className="text-sm font-semibold mb-1">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-1 text-left">Order ID</th>
                    <th className="p-1 text-left">Customer</th>
                    <th className="p-1 text-left">Total</th>
                    <th className="p-1 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-1">ORD001</td>
                    <td className="p-1">Prashant Dwivedi</td>
                    <td className="p-1">$150.00</td>
                    <td className="p-1">
                      <span className="px-1 py-0.5 rounded bg-yellow-200 text-2xs">Pending</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-1">ORD002</td>
                    <td className="p-1">Gurpreet Singh</td>
                    <td className="p-1">$250.00</td>
                    <td className="p-1">
                      <span className="px-1 py-0.5 rounded bg-blue-200 text-2xs">Shipped</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">ORD003</td>
                    <td className="p-1">Anand Lakhanpal</td>
                    <td className="p-1">$100.00</td>
                    <td className="p-1">
                      <span className="px-1 py-0.5 rounded bg-green-200 text-2xs">Delivered</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-0" 
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
};

export default CompactERPDemo;