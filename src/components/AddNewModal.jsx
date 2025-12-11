import React, { useState } from "react";
import { hoursPerDay, hoursPerWeek, hoursPerMonth, yearsPerLife } from "../ItemCalculations";
export default function AddNewModal({ setShowingAddNew, setCustomItems }) {
  const [activityName, setActivityName] = useState("");
  const [singularLabel, setSingularLabel] = useState("");
  const [pluralLabel, setPluralLabel] = useState("");
  const [timeWorth, setTimeWorth] = useState("hours_per_day");

  const handleSubmit = (e) => {
    /*
    {
        name: "Hours in depression",
        image_url: "https://images.unsplash.com/photo-1598812866501-87ad598839e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        unit_of_measurement: ["hour per day", "hours per day"],
        calculation_function: hoursPerDay,
        shortName: "Depression",
        setDotArrangment: setDotArrangement,
      }
    */
    e.preventDefault();
    console.log({
      activityName,
      singularLabel,
      pluralLabel,
      timeWorth,
    });
    let calculationFunction = null;
    switch (timeWorth) {
        case "hours_per_day":
        calculationFunction = hoursPerDay;
        break;
        case "hours_per_week":
        calculationFunction = hoursPerWeek;
        break;
        case "hours_per_month":
        calculationFunction = hoursPerMonth;
        break;
        case "years_per_life":
        calculationFunction = yearsPerLife;
        break;
    }
        
    const payload = {
        name: activityName,
        shortName: activityName,
        image_url: "https://images.unsplash.com/photo-1598812866501-87ad598839e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        unit_of_measurement: [singularLabel, pluralLabel],
        calculation_function: calculationFunction
    }
    setCustomItems((prev) => [
      ...prev, payload])
    setShowingAddNew(false);
  };

  const handleCancel = () => {
    setShowingAddNew(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add a new activity
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Activity Name
            </label>
            <input
              type="text"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="e.g., Reading, Exercise"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Singular Label
            </label>
            <input
              type="text"
              value={singularLabel}
              onChange={(e) => setSingularLabel(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="e.g., book, session"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Plural Label
            </label>
            <input
              type="text"
              value={pluralLabel}
              onChange={(e) => setPluralLabel(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="e.g., books, sessions"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Time Worth
            </label>
            <select
              value={timeWorth}
              onChange={(e) => setTimeWorth(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
            >
              <option value="hours_per_day">Hours per day</option>
              <option value="hours_per_week">Hours per week</option>
              <option value="hours_per_month">Hours per month</option>
              <option value="years_per_life">Years per life</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Add Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
