import { useState } from "react";
import AspectSelector from "./AspectSelector";
import SupplementList from "./SupplementList";
import { healthAspects, aspectDescriptions } from "./data/supplementData";

function StackingToolReact() {
  const [selectedHealthAspect, setSelectedHealthAspect] = useState("");
  const supplementStack = selectedHealthAspect ? healthAspects[selectedHealthAspect] : [];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
            Personalized Supplement Stack Builder
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a health aspect below to receive personalized supplement recommendations
            based on your specific wellness goals.
          </p>
        </div>

        <AspectSelector
          selectedAspect={selectedHealthAspect}
          onAspectChange={setSelectedHealthAspect}
          aspects={Object.keys(healthAspects)}
          descriptions={aspectDescriptions}
        />

        {selectedHealthAspect && (
          <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <SupplementList 
              supplements={supplementStack}
              aspect={selectedHealthAspect}
              description={aspectDescriptions[selectedHealthAspect]}
            />
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Note: These recommendations are general guidelines. Always consult with a
            healthcare professional before starting any supplement regimen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StackingToolReact;