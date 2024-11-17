import { titleToSlug } from "../../utils/categories";

function SupplementList({ supplements, aspect, description }) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-secondary mb-2 capitalize">
          {aspect} Support Stack
        </h3>
        <p className="text-gray-600">{description.full}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {supplements.map((supplement) => (
          <div
            key={supplement.name}
            className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
          >
            <h4 className="font-heading font-semibold text-secondary mb-2">
              {supplement.blogUrl ? (
                <a 
                  href={supplement.blogUrl} 
                  className="hover:text-tertiary transition-colors duration-300"
                >
                  {supplement.name}
                </a>
              ) : (
                supplement.name
              )}
            </h4>
            <p className="text-sm text-gray-600">{supplement.description}</p>
            <div className="mt-2 text-xs text-gray-500">
              Suggested dose: {supplement.dosage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupplementList;