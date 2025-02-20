import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-400 mb-6">
          Expense Tracker
        </h1>
        <ExpenseForm />
        <div className="mt-6">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
