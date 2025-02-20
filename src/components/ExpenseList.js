import React, { useEffect, useState } from "react";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/expenses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch expenses");
        }
        return response.json();
      })
      .then((data) => setExpenses(data))
      .catch((error) => {
        setError(error.message);
        console.error("Fetch error:", error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/expenses/${id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete expense");
        }
        setExpenses(expenses.filter((expense) => expense.id !== id));
      })
      .catch((error) => {
        setError(error.message);
        console.error("Delete error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Expense List</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-md">
        {expenses.length === 0 ? (
          <p className="text-gray-400 text-center">No expenses found.</p>
        ) : (
          expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-center border-b border-gray-700 py-2"
            >
              <span>
                {expense.title} - ${expense.amount}
              </span>
              <button
                onClick={() => handleDelete(expense.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
