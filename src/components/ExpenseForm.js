import React, { useState } from "react";

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expense),
      });

      if (!response.ok) {
        throw new Error("Failed to add expense");
      }

      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="  flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-700 w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          ✨ Add New Expense
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="title"
            placeholder="Expense Title"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 focus:ring-4 focus:ring-blue-500 outline-none transition-all duration-300 hover:shadow-md"
          />
          <br></br>
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 focus:ring-4 focus:ring-blue-500 outline-none transition-all duration-300 hover:shadow-md"
          />
          <br></br>
          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 focus:ring-4 focus:ring-blue-500 outline-none transition-all duration-300 hover:shadow-md"
          />
          <br></br>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            🚀 Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
