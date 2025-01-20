const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group p-8 rounded-2xl bg-white hover:bg-emerald-50 transition-all duration-300 hover:scale-105 cursor-pointer border border-stone-100">
      <div className="mb-6">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-stone-800 mb-3">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
};

export default FeatureCard;