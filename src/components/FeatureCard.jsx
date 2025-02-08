const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-white border rounded-2xl border-stone-300">
      <div className="mb-6 text-emerald-700">
        <Icon />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-stone-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
};

export default FeatureCard;