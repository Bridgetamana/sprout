import { LuStar } from "react-icons/lu";

const TestimonialCard = ({ name, role, content, rating }) => {
  return (
    <div className="p-6 bg-white shadow-sm rounded-2xl">
      <div className="flex items-center mb-4 space-x-1">
        {[...Array(rating)].map((_, i) => (
          <LuStar key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
        ))}
      </div>
      <p className="mb-4 text-stone-600">{content}</p>
      <div>
        <p className="font-medium text-stone-800">{name}</p>
        <p className="text-sm text-stone-500">{role}</p>
      </div>
    </div>
  );
};


export default TestimonialCard