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
            className="object-cover w-12 h-12 rounded-lg"
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
    <div className="min-h-screen py-8 bg-stone-50">
      <div className="p-6 px-4 mx-auto max-w-7xl md:px-8 lg:px-10">
        <button
          onClick={() => window.history.back()}
          className="flex items-center mb-6 text-stone-600 hover:text-emerald-700"
        >
          <LuArrowLeft className="mr-2" /> Back
        </button>

        <div className="py-16 mb-12">
          <div className="max-w-6xl px-4 mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-stone-800">
              Plant Care Guides
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-stone-600">
              Search from our extensive database of plants and discover detailed
              care instructions to help your plants thrive.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="px-6 bg-white shadow-sm rounded-2xl py-9">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 border rounded-full border-stone-200 focus:outline-none focus:border-emerald-700"
                />
                <LuSearch className="absolute transform -translate-y-1/2 left-3 top-1/2 text-stone-400" />
              </div>

              <div className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto">
                {searchLoading ? (
                  <div className="space-y-2 animate-pulse">
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
                        className="w-full py-2 mt-2 text-center text-emerald-700 hover:text-emerald-800"
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
                  <p className="py-4 text-center text-stone-600">
                    No plants found matching &quot;{searchTerm}&quot;
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            {loading ? (
              <div className="p-8 bg-white shadow-sm rounded-2xl">
                <div className="animate-pulse">
                  <div className="w-3/4 h-8 mb-4 rounded bg-stone-200"></div>
                  <div className="w-1/2 h-4 mb-8 rounded bg-stone-200"></div>
                  <div className="grid gap-6 sm:grid-cols-2">
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
              <div className="p-8 bg-white shadow-sm rounded-2xl">
                <p className="text-red-600">{error}</p>
              </div>
            ) : selectedPlant ? (
              <div className="p-8 bg-white shadow-sm rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  {selectedPlant.default_image?.thumbnail && (
                    <img
                      src={selectedPlant.default_image.thumbnail}
                      alt={selectedPlant.common_name}
                      className="object-cover w-16 h-16 rounded-lg"
                    />
                  )}
                  <div>
                    <h2 className="text-3xl font-bold text-stone-800">
                      {selectedPlant.common_name}
                    </h2>
                    <p className="italic text-stone-600">
                      {selectedPlant.scientific_name?.[0]}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 mb-8 sm:grid-cols-2">
                  <CareDetail
                    icon={<LuDroplets className="w-6 h-6" />}
                    title="Watering"
                    value={selectedPlant.watering}
                  />
                  <CareDetail
                    icon={<LuSun className="w-6 h-6" />}
                    title="Sunlight"
                    value={selectedPlant.sunlight?.join(", ")}
                  />
                  <CareDetail
                    icon={<LuWind className="w-6 h-6" />}
                    title="Care Level"
                    value={selectedPlant.care_level}
                  />
                  <CareDetail
                    icon={<LuThermometerSun className="w-6 h-6" />}
                    title="Growth Rate"
                    value={selectedPlant.growth_rate}
                  />
                </div>

                {selectedPlant.description && (
                  <div className="mt-6">
                    <h3 className="mb-2 font-medium text-stone-800">
                      Description
                    </h3>
                    <p className="text-stone-600">
                      {selectedPlant.description}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 text-center bg-white shadow-sm rounded-2xl">
                <h2 className="mb-4 text-2xl font-bold text-stone-800">
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
