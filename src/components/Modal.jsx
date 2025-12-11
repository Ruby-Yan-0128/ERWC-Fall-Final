import { useEffect, useState } from 'react';

export default function Modal({ isOpen, dotArrangement }) {
  const [showSummary, setShowSummary] = useState(false);

  if (!isOpen) return null;

  const totalYears = Object.values(dotArrangement).reduce((sum, val) => sum + val, 0);

  const getBarColor = (category) => {
    const colors = {
      'Work': 'bg-blue-500',
      'Partying': 'bg-purple-500',
      'School': 'bg-green-500',
      'Phone': 'bg-red-500',
      'Sleep': 'bg-indigo-500',
      'Friends': 'bg-pink-500',
      'Eating': 'bg-yellow-500',
      'Hobbies': 'bg-orange-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  

  if (!showSummary) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 backdrop-blur-sm">
        <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-16 shadow-2xl text-center max-w-2xl mx-4 border-4 border-red-400">
          <h1 className="text-7xl font-bold text-white mb-8 drop-shadow-lg">YOUR TIME IS DONE</h1>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {setShowSummary(true); setUserDismissed(false)}}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-50 transition-all hover:scale-105 shadow-lg"
            >
              See Summary
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-2">Life Summary</h2>
          <p className="text-3xl text-gray-600">
            You spent <span className="font-bold text-red-600">{totalYears.toFixed(2)}</span> years
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(dotArrangement)
            .sort(([, a], [, b]) => b - a)
            .map(([category, years]) => {
              const percentage = (years / totalYears) * 100;
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg text-gray-700">{category}</span>
                    <span className="text-gray-600 font-medium">{years.toFixed(2)} years</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden shadow-inner">
                    <div
                      className={`${getBarColor(category)} h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                      style={{ width: `${percentage}%` }}
                    >
                      {percentage > 10 && (
                        <span className="text-white font-bold text-sm drop-shadow">
                          {percentage.toFixed(1)}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {window.location.reload()}}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-700 transition-all hover:scale-105 shadow-lg"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}