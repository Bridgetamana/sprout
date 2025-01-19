import { LuStar } from "react-icons/lu";

const TestimonialCard = ({ name, role, content, rating }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <LuStar key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
        ))}
      </div>
      <p className="text-stone-600 mb-4">{content}</p>
      <div>
        <p className="font-medium text-stone-800">{name}</p>
        <p className="text-sm text-stone-500">{role}</p>
      </div>
    </div>
  );
};


export default TestimonialCard