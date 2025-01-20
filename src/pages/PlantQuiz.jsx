import { useState } from "react";
import { LuChevronRight, LuArrowLeft } from "react-icons/lu";
import { plantMatches, questions } from "../components/Data";
import PlantMatch from "../components/PlantMatch";

const PlantQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerId) => {
    setAnswers({ ...answers, [currentQuestion]: answerId });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
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
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">
              Your Perfect Plant Matches!
            </h2>
            <div className="space-y-6">
              {plantMatches.map((match, index) => (
              <PlantMatch key={index} {...match} />
            ))}
            </div>
            <button
              onClick={resetQuiz}
              className="mt-8 bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition-all hover:scale-105"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="mb-8">
            <div className="h-2 bg-stone-100 rounded-full">
              <div
                className="h-2 bg-emerald-700 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <p className="text-sm text-stone-600 mt-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(option.id)}
                className="w-full p-4 text-left border border-stone-200 rounded-xl hover:border-emerald-700 hover:bg-emerald-50 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-stone-800">
                      {option.text}
                    </h3>
                    <p className="text-sm text-stone-600">
                      {option.description}
                    </p>
                  </div>
                  <LuChevronRight className="text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="mt-6 flex items-center text-stone-600 hover:text-emerald-700 transition-colors"
            >
              <LuArrowLeft className="mr-2 h-4 w-4" />
              Previous Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantQuiz;
