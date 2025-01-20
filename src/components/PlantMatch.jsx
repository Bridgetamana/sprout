
const PlantMatch = ({ name, description, care }) => (
  <div className="flex items-center space-x-4 p-4 border border-stone-200 rounded-xl">
    <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
      <span className="text-2xl">🌿</span>
    </div>
    <div>
      <h3 className="font-medium text-stone-800">{name}</h3>
      <p className="text-sm text-stone-600">{description}</p>
      <span className="inline-block mt-1 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
        {care} Care
      </span>
    </div>
  </div>
);

export default PlantMatch;
