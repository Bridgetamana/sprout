
const CareDetail = ({ icon, title, value }) => (
    <div className="p-4 bg-stone-50 rounded-xl">
      <div className="flex items-center space-x-3 mb-2">
        <div className="text-emerald-700">{icon}</div>
        <h3 className="font-medium text-stone-800">{title}</h3>
      </div>
      <p className="text-stone-600">{value}</p>
    </div>
  );

export default CareDetail;
