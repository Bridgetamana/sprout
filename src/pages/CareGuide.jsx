import { useState, useEffect } from "react";
import {
  LuSearch, LuArrowLeft, LuDroplets, LuSun, LuWind, LuThermometerSun, LuChevronDown
} from "react-icons/lu";
import CareDetail from "../components/CareDetail";

const API_KEY = import.meta.env.VITE_API_KEY;
const RESULTS_PER_PAGE = 8;

const CareGuide = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAllResults, setShowAllResults] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.length < 2) {
        setSearchResults([]);
        return;
      }

      setSearchLoading(true);
      try {
        const response = await fetch(
          `https://perenual.com/api/species-list?key=${API_KEY}&q=${searchTerm}`
        );
        const data = await response.json();
        setSearchResults(data.data || []);
        setShowAllResults(false);
      } catch (err) {
        setError(`Failed to search plants: ${err.message}`);
      } finally {
        setSearchLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSearchResults, 500);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const displayedResults = showAllResults
    ? searchResults
    : searchResults.slice(0, RESULTS_PER_PAGE);

  const renderSearchResult = (plant) => (
    <button
      key={plant.id}
      onClick={() => fetchPlantDetails(plant.id)}
      className={`w-full p-4 text-left rounded-xl transition-all ${
        selectedPlant?.id === plant.id
          ? "bg-emerald-50 text-emerald-700"
          : "hover:bg-stone-50"
      }`}
    >
      <div className="flex gap-3">
        {plant.default_image?.thumbnail && (
          <img
            src={plant.default_image.thumbnail}
            alt={plant.common_name}
            className="w-12 h-12 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="font-medium">{plant.common_name}</h3>
          <p className="text-sm text-stone-600">{plant.scientific_name?.[0]}</p>
          {plant.cycle && (
            <span className="inline-block mt-1 px-2 py-0.5 bg-stone-100 text-stone-600 text-xs rounded-full">
              {plant.cycle}
            </span>
          )}
        </div>
      </div>
    </button>
  );

  const fetchPlantDetails = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://perenual.com/api/species/details/${id}?key=${API_KEY}`
      );
      const data = await response.json();
      setSelectedPlant(data);
      setError(null);
    } catch (err) {
      setError(`Failed to load plant details: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => window.history.back()}
          className="mb-6 flex items-center text-stone-600 hover:text-emerald-700"
        >
          <LuArrowLeft className="mr-2" /> Back
        </button>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl px-6 py-9 shadow-sm">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-full focus:outline-none focus:border-emerald-700"
                />
                <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
              </div>

              <div className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto">
                {searchLoading ? (
                  <div className="animate-pulse space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-16 bg-stone-100 rounded-xl"
                      ></div>
                    ))}
                  </div>
                ) : displayedResults.length > 0 ? (
                  <>
                    {displayedResults.map(renderSearchResult)}
                    {searchResults.length > RESULTS_PER_PAGE && (
                      <button
                        onClick={() => setShowAllResults(!showAllResults)}
                        className="w-full mt-2 py-2 text-center text-emerald-700 hover:text-emerald-800"
                      >
                        {showAllResults ? (
                          "Show Less"
                        ) : (
                          <span className="flex items-center justify-center gap-1">
                            View {searchResults.length - RESULTS_PER_PAGE} More
                            <LuChevronDown />
                          </span>
                        )}
                      </button>
                    )}
                  </>
                ) : searchTerm.length > 0 ? (
                  <p className="text-center text-stone-600 py-4">
                    No plants found matching &quot;{searchTerm}&quot;
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            {loading ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="animate-pulse">
                  <div className="h-8 bg-stone-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-stone-200 rounded w-1/2 mb-8"></div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-24 bg-stone-200 rounded-xl"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ) : error ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-red-600">{error}</p>
              </div>
            ) : selectedPlant ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  {selectedPlant.default_image?.thumbnail && (
                    <img
                      src={selectedPlant.default_image.thumbnail}
                      alt={selectedPlant.common_name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  )}
                  <div>
                    <h2 className="text-3xl font-bold text-stone-800">
                      {selectedPlant.common_name}
                    </h2>
                    <p className="text-stone-600 italic">
                      {selectedPlant.scientific_name?.[0]}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <CareDetail
                    icon={<LuDroplets className="h-6 w-6" />}
                    title="Watering"
                    value={selectedPlant.watering}
                  />
                  <CareDetail
                    icon={<LuSun className="h-6 w-6" />}
                    title="Sunlight"
                    value={selectedPlant.sunlight?.join(", ")}
                  />
                  <CareDetail
                    icon={<LuWind className="h-6 w-6" />}
                    title="Care Level"
                    value={selectedPlant.care_level}
                  />
                  <CareDetail
                    icon={<LuThermometerSun className="h-6 w-6" />}
                    title="Growth Rate"
                    value={selectedPlant.growth_rate}
                  />
                </div>

                {selectedPlant.description && (
                  <div className="mt-6">
                    <h3 className="font-medium text-stone-800 mb-2">
                      Description
                    </h3>
                    <p className="text-stone-600">
                      {selectedPlant.description}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <h2 className="text-2xl font-bold text-stone-800 mb-4">
                  Select a Plant
                </h2>
                <p className="text-stone-600">
                  Search for a plant and select it to view its care guide.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareGuide;