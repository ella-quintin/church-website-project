import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Admin Dashboard
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Manage ministry systems and website content
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-5">
          
          {/* Asoriba */}
          <Link
            to="https://app.asoriba.com/#/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full rounded-xl border border-blue-200 bg-blue-50 px-6 py-5 text-[#04164B] font-semibold transition hover:bg-[#04164B] hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>Asoriba Dashboard</span>
            <span className="text-sm opacity-70 group-hover:opacity-100">
              →
            </span>
          </Link>

          {/* Website CMS */}
          <Link
            to="https://mdm-cms-page.sanity.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full rounded-xl border border-red-200 bg-green-50 px-6 py-5 text-red-600  font-semibold transition hover:bg-red-600  hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <span>Website Content Management</span>
            <span className="text-sm opacity-70 group-hover:opacity-100">
              →
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
