import { useState } from "react";
import AspectSelector from "./AspectSelector";
import SupplementList from "./SupplementList";
import { healthAspects } from "./data/supplementData";

function StackingToolReact() {
  const [selectedHealthAspect, setSelectedHealthAspect] = useState("");
  const supplementStack = selectedHealthAspect ? healthAspects[selectedHealthAspect] : [];

  return (
    <div className="p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-heading mb-4">Stack Your Supplements</h2>
      <AspectSelector
        selectedAspect={selectedHealthAspect}
        onAspectChange={setSelectedHealthAspect}
        aspects={Object.keys(healthAspects)}
      />
      {supplementStack.length > 0 && <SupplementList supplements={supplementStack} />}
    </div>
  );
}

export default StackingToolReact;