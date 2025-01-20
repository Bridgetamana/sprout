import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import CareDetail from '../components/CareDetail';
import { careDetails, plants } from '../components/Data';

const CareGuide = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState(null);

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-full focus:outline-none focus:border-emerald-700"
                />
                <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-5 w-5" />
              </div>

              <div className="space-y-2">
                {filteredPlants.map(plant => (
                  <button
                    key={plant.id}
                    onClick={() => setSelectedPlant(plant)}
                    className={`w-full p-3 text-left rounded-xl transition-all ${
                      selectedPlant?.id === plant.id
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'hover:bg-stone-50'
                    }`}
                  >
                    <h3 className="font-medium">{plant.name}</h3>
                    <p className="text-sm text-stone-600">{plant.scientificName}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            {selectedPlant ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-stone-800 mb-2">{selectedPlant.name}</h2>
                <p className="text-stone-600 italic mb-8">{selectedPlant.scientificName}</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {careDetails.map((detail, index) => (
                      <CareDetail key={index} {...detail}/>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <h2 className="text-2xl font-bold text-stone-800 mb-4">Select a Plant</h2>
                <p className="text-stone-600">
                  Choose a plant from the list to view its care guide.
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