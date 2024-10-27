function AspectSelector({ selectedAspect, onAspectChange, aspects }) {
  const handleChange = (event) => {
    onAspectChange(event.target.value);
  };

  return (
    <div className="mb-6">
      <label className="block mb-2" htmlFor="health-aspect">
        Choose a health aspect to optimize:
      </label>
      <select
        id="health-aspect"
        value={selectedAspect}
        onChange={handleChange}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-200"
      >
        <option value="">Select...</option>
        {aspects.map((aspect) => (
          <option value={aspect} key={aspect}>
            {aspect.charAt(0).toUpperCase() + aspect.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AspectSelector;