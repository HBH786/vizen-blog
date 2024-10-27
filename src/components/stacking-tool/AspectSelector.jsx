import { useState } from "react";

function AspectSelector({ selectedAspect, onAspectChange, aspects, descriptions }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {aspects.map((aspect) => (
        <button
          key={aspect}
          onClick={() => {
            onAspectChange(aspect);
            setIsOpen(false);
          }}
          className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
            selectedAspect === aspect
              ? "border-secondary bg-secondary text-white"
              : "border-gray-200 hover:border-secondary/50"
          }`}
        >
          <div className="text-left">
            <h3 className="font-heading font-semibold mb-2 capitalize">
              {aspect}
            </h3>
            <p className={`text-sm ${
              selectedAspect === aspect ? "text-white/90" : "text-gray-600"
            }`}>
              {descriptions[aspect].short}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default AspectSelector;