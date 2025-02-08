import { useState } from "react";
import {
  LuChevronRight,
  LuArrowLeft,
  LuLeaf,
  LuSun,
  LuDroplets,
  LuHeart,
} from "react-icons/lu";
import { questions } from "../utils/data";

const API_KEY = import.meta.env.VITE_API_KEY;

const filterPlantsByAnswers = (plants, answers) => {
  const [lightPref, waterPref, petSafe] = Object.values(answers);

  return plants
    .filter((plant) => {
      const lightMatch =
        {
          low: plant.sunlight?.some(
            (s) =>
              s.toLowerCase().includes("shade") ||
              s.toLowerCase().includes("partial") ||
              s.toLowerCase().includes("low")
          ),
          medium: plant.sunlight?.some(
            (s) =>
              s.toLowerCase().includes("indirect") ||
              s.toLowerCase().includes("partial")
          ),
          bright: plant.sunlight?.some(
            (s) =>
              s.toLowerCase().includes("full") ||
              s.toLowerCase().includes("direct")
          ),
        }[lightPref] ?? true;

      const waterMatch =
        {
          daily:
            plant.watering === "Frequent" ||
            plant.watering_general_benchmark?.value <= 3,
          weekly:
            plant.watering === "Average" ||
            (plant.watering_general_benchmark?.value > 3 &&
              plant.watering_general_benchmark?.value <= 7),
          biweekly:
            plant.watering === "Minimum" ||
            plant.watering === "Low" ||
            plant.watering_general_benchmark?.value > 7,
        }[waterPref] ?? true;

      const petMatch = petSafe === "yes" ? !plant.poisonous_to_pets : true;

      plant.matchScore = [lightMatch, waterMatch, petMatch].filter(
        Boolean
      ).length;

      return lightMatch && waterMatch && petMatch;
    })
    .sort((a, b) => b.matchScore - a.matchScore);
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
        const filtered = filterPlantsByAnswers(data.data, newAnswers);
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
      <div className="min-h-screen py-10 bg-stone-50">
        <div className="p-6 px-4 mx-auto max-w-7xl md:px-8 lg:px-10">
          <button
            onClick={() => window.history.back()}
            className="flex items-center mb-8 text-stone-600 hover:text-emerald-700"
          >
            <LuArrowLeft className="mr-2" /> Back
          </button>

          {isLoading ? (
            <div className="p-8 bg-white shadow-sm rounded-2xl">
              <div className="flex items-center justify-center min-h-[200px]">
                <div className="w-12 h-12 border-4 rounded-full border-emerald-200 border-t-emerald-600 animate-spin" />
              </div>
            </div>
          ) : (
            <div className="">
              <div className="max-w-3xl p-8 mx-auto bg-white shadow-sm rounded-2xl">
                <h2 className="mb-2 text-2xl font-bold text-stone-800">
                  Your Plant Matches
                </h2>
                <p className="mb-8 text-lg text-stone-600">
                  Based on your preferences, here are your most compatible
                  plants
                </p>

                <div className="space-y-6">
                  {matchedPlants.length > 0 ? (
                    matchedPlants.map((plant) => (
                      <div
                        key={plant.id}
                        className="flex items-start p-6 space-x-4 transition-all border border-stone-200 rounded-xl hover:border-emerald-600"
                      >
                        {plant.default_image?.thumbnail && (
                          <img
                            src={plant.default_image.thumbnail}
                            alt={plant.common_name}
                            className="object-cover w-24 h-24 rounded-lg"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="text-xl font-medium text-stone-800">
                            {plant.common_name}
                          </h3>
                          <p className="text-stone-600">
                            {plant.scientific_name[0]}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {plant.sunlight?.map((light, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-sm rounded-full bg-emerald-50 text-emerald-700"
                              >
                                {light}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-4 mt-4">
                            <div className="text-stone-600">
                              <span className="block text-sm font-medium">
                                Care Level
                              </span>
                              <span>{plant.care_level}</span>
                            </div>
                            <div className="text-stone-600">
                              <span className="block text-sm font-medium">
                                Watering
                              </span>
                              <span>{plant.watering}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center rounded-xl bg-stone-50">
                      <p className="text-lg text-stone-600">
                        No perfect matches found. Try adjusting your
                        preferences!
                      </p>
                      <button
                        onClick={resetQuiz}
                        className="px-6 py-3 mt-4 text-white transition-all rounded-full bg-emerald-600 hover:bg-emerald-700"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <div className="max-w-3xl px-4 mx-auto">
        <button
          onClick={() => window.history.back()}
          className="flex items-center mb-8 text-stone-600 hover:text-emerald-700"
        >
          <LuArrowLeft className="mr-2" /> Back
        </button>

        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm font-medium text-stone-600">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>
              {Math.round((currentQuestion / questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full h-2 overflow-hidden rounded-full bg-stone-100">
            <div
              className="h-full transition-all rounded-full bg-emerald-600"
              style={{
                width: `${(currentQuestion / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="p-8 bg-white shadow-sm rounded-2xl">
          <h2 className="mb-6 text-3xl font-bold text-stone-800">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                className="w-full p-6 text-left transition-all border border-stone-200 rounded-xl hover:border-emerald-600 hover:bg-emerald-50/50 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-stone-800">
                      {option.text}
                    </h3>
                    <p className="mt-1 text-stone-600">{option.description}</p>
                  </div>
                  <LuChevronRight className="transition-all text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 mt-6 transition-all rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200"
            >
              Back to Previous
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantQuiz;