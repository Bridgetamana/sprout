import { useState } from "react";
import { LuChevronRight, LuArrowLeft } from "react-icons/lu";
import { questions } from "../utils/data";

const API_KEY = import.meta.env.VITE_API_KEY;

const filterPlantsByAnswers = (plants, answers) => {
  return plants.filter(plant => {
    if (answers[0] === 'low' && !plant.sunlight.some(s => s.toLowerCase().includes('shade') || s.toLowerCase().includes('low'))) return false;
    if (answers[0] === 'bright' && !plant.sunlight.some(s => s.toLowerCase().includes('full sun'))) return false;
        if (answers[1] === 'daily' && plant.watering !== 'Frequent') return false;
    if (answers[1] === 'weekly' && plant.watering !== 'Moderate') return false;
    if (answers[1] === 'biweekly' && plant.watering !== 'Minimum') return false;
        if (answers[2] === 'yes' && plant.poisonous_to_pets) return false;
    
    return true;
  });
};

const PlantQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [matchedPlants, setMatchedPlants] = useState([]);
  const [error, setError] = useState(null);

  const handleAnswer = async (answerId) => {
    const newAnswers = { ...answers, [currentQuestion]: answerId };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://perenual.com/api/species-list?key=${API_KEY}&page=1&per_page=50&indoor=true`
        );
        const data = await response.json();
                const filtered = filterPlantsByAnswers(data.data, Object.values(newAnswers));
        setMatchedPlants(filtered);
        setShowResults(true);
      } catch (err) {
        setError(`Failed to fetch plant recommendations: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen py-12 bg-stone-50">
        <div className="max-w-2xl px-4 mx-auto">
          <button
            onClick={() => window.history.back()}
            className="flex items-center mb-6 text-stone-600 hover:text-emerald-700"
          >
            <LuArrowLeft className="mr-2" /> Back
          </button>
          <div className="p-8 bg-white shadow-sm rounded-2xl">
            <h2 className="mb-6 text-2xl font-bold text-stone-800">
              Your Perfect Plant Matches!
            </h2>
            <div className="space-y-6">
              {matchedPlants.length > 0 ? (
                matchedPlants.map((plant) => (
                  <div 
                    key={plant.id}
                    className="flex items-center p-4 space-x-4 border border-stone-200 rounded-xl"
                  >
                    {plant.default_image?.thumbnail && (
                      <img
                        src={plant.default_image.thumbnail}
                        alt={plant.common_name}
                        className="object-cover w-16 h-16 rounded-lg"
                      />
                    )}
                    <div>
                      <h3 className="font-medium text-stone-800">{plant.common_name}</h3>
                      <p className="text-sm text-stone-600">{plant.scientific_name[0]}</p>
                      <p className="text-sm text-stone-600">Care Level: {plant.care_level}</p>
                      <div className="flex gap-2 mt-2">
                        {plant.sunlight?.map((light, index) => (
                          <span 
                            key={index}
                            className="inline-block px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700"
                          >
                            {light}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-stone-600">
                  No perfect matches found. Try adjusting your preferences!
                </p>
              )}
            </div>
            <button
              onClick={resetQuiz}
              className="px-6 py-3 mt-8 text-white transition-all rounded-full bg-emerald-700 hover:bg-emerald-800 hover:scale-105"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <div className="max-w-2xl px-4 mx-auto">
        <button
          onClick={() => window.history.back()}
          className="flex items-center mb-6 text-stone-600 hover:text-emerald-700"
        >
          <LuArrowLeft className="mr-2" /> Back
        </button>
        <div className="p-8 bg-white shadow-sm rounded-2xl">
          <h2 className="mb-6 text-2xl font-bold text-stone-800">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                className="w-full p-4 text-left transition-all border border-stone-200 rounded-xl hover:border-emerald-700 hover:bg-emerald-50 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-stone-800">{option.text}</h3>
                    <p className="text-sm text-stone-600">{option.description}</p>
                  </div>
                  <LuChevronRight className="transition-all text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm text-stone-600">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 mt-4 transition-all rounded-full bg-stone-200 text-stone-600 hover:bg-stone-300"
            >
              Back
            </button>
          )}
        </div>
        {isLoading && (
          <div className="mt-6 space-y-2 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-16 bg-stone-100 rounded-xl"
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantQuiz;