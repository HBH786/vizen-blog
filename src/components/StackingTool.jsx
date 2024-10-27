// src/components/stacking-tool/StackingTool.jsx
import React, { useState } from "react";
import supplementStacks from "../../data/supplementStacks.json"; // Ensure this path is correct

function StackingTool() {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
  };

  const getStackForGoal = (goal) => {
    const stack = supplementStacks.find((item) => item.goal === goal);
    return stack ? stack.stack : [];
  };

  return (
    <div>
      <h2>Select a Health Goal</h2>
      <ul>
        {supplementStacks.map((item) => (
          <li key={item.goal}>
            <button
              onClick={() => handleSelectGoal(item.goal)}
              className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-tertiary transition-colors duration-300"
            >
              {item.goal}
            </button>
          </li>
        ))}
      </ul>

      {selectedGoal && (
        <div>
          <h3>Recommended Stack for {selectedGoal}</h3>
          <ul>
            {getStackForGoal(selectedGoal).map((supplement) => (
              <li key={supplement.id}>
                <strong>{supplement.name}</strong>: {supplement.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StackingTool;