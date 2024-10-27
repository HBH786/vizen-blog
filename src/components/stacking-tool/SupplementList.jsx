function SupplementList({ supplements }) {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-heading mb-3">Recommended Supplements:</h3>
      <ul className="list-disc ml-5 space-y-2">
        {supplements.map((supplement) => (
          <li key={supplement} className="text-gray-700">
            {supplement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SupplementList;