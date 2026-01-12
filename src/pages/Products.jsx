import React, { useState } from 'react';

function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);

  const categories = ['all', 'terracotta', 'stoneware', 'earthenware', 'decorative', 'functional'];

  const artworks = [
    {
      id: 1,
      title: 'Earth Mother',
      category: 'terracotta',
      year: '2023',
      dimensions: '18" x 12" x 24"',
      description: 'A flowing terracotta sculpture celebrating feminine energy and the earth\'s nurturing power.',
      image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&h=800&fit=crop',
      price: 'Available',
    },
    {
      id: 2,
      title: 'Sacred Vessel',
      category: 'stoneware',
      year: '2023',
      dimensions: '14" x 14" x 20"',
      description: 'High-fired stoneware pot with ancient-inspired geometric patterns.',
      image: 'https://images.unsplash.com/photo-1610701076654-b7f71e204703?w=800&h=800&fit=crop',
      price: 'Available',
    },
    {
      id: 3,
      title: 'Ancient Spirits',
      category: 'earthenware',
      year: '2022',
      dimensions: '16" x 10" x 28"',
      description: 'Hand-built earthenware figure invoking ancestral wisdom.',
      image: 'https://images.unsplash.com/photo-1615826932727-ed9f182ac73e?w=800&h=800&fit=crop',
      price: 'Sold',
    },
    {
      id: 4,
      title: 'Nature\'s Embrace',
      category: 'decorative',
      year: '2023',
      dimensions: '12" x 12" x 16"',
      description: 'Organic terracotta form celebrating natural curves and texture.',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=800&fit=crop',
      price: 'Available',
    },
    {
      id: 5,
      title: 'Morning Ritual Bowl',
      category: 'functional',
      year: '2023',
      dimensions: '10" diameter x 4" height',
      description: 'Wheel-thrown stoneware bowl for daily mindfulness practice.',
      image: 'https://images.unsplash.com/photo-1610224907689-7518922c60c3?w=800&h=800&fit=crop',
      price: 'Available',
    },
    {
      id: 6,
      title: 'Heritage',
      category: 'terracotta',
      year: '2021',
      dimensions: '20" x 15" x 30"',
      description: 'Traditional terracotta sculpture honoring ancestral craftsmanship.',
      image: 'https://images.unsplash.com/photo-1594993481084-5f34e820b47f?w=800&h=800&fit=crop',
      price: 'Sold',
    },
    {
      id: 7,
      title: 'Zen Garden Stones',
      category: 'decorative',
      year: '2023',
      dimensions: 'Set of 5, various sizes',
      description: 'Smooth clay stones with organic glazing for meditation spaces.',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=800&fit=crop',
      price: 'Available',
    },
    {
      id: 8,
      title: 'Harvest Pitcher',
      category: 'functional',
      year: '2022',
      dimensions: '8" x 6" x 12"',
      description: 'Hand-thrown earthenware pitcher with rustic glaze finish.',
      image: 'https://images.unsplash.com/photo-1610224907689-7518922c60c3?w=800&h=800&fit=crop',
      price: 'Available',
    },
    {
      id: 9,
      title: 'Whispers of Time',
      category: 'earthenware',
      year: '2021',
      dimensions: '22" x 18" x 32"',
      description: 'Weathered earthenware sculpture telling stories through texture.',
      image: 'https://images.unsplash.com/photo-1615826932727-ed9f182ac73e?w=800&h=800&fit=crop',
      price: 'Sold',
    },
    {
      id: 10,
      title: 'Terra Forma',
      category: 'decorative',
      year: '2023',
      dimensions: '24" x 20" x 36"',
      description: 'Abstract terracotta form exploring earth and sky connection.',
      image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&h=800&fit=crop',
      price: 'Available',
    },
    {
      id: 11,
      title: 'Ancient Echo',
      category: 'stoneware',
      year: '2022',
      dimensions: '18" x 16" x 28"',
      description: 'Coil-built stoneware inspired by ancient civilizations.',
      image: 'https://images.unsplash.com/photo-1610701076654-b7f71e204703?w=800&h=800&fit=crop',
      price: 'Available',
    },
    {
      id: 12,
      title: 'Earth\'s Song',
      category: 'terracotta',
      year: '2023',
      dimensions: '26" x 22" x 40"',
      description: 'Large terracotta sculpture celebrating the music of nature.',
      image: 'https://images.unsplash.com/photo-1594993481084-5f34e820b47f?w=800&h=800&fit=crop',
      price: 'Available',
    },
  ];

  const filteredArtworks = activeFilter === 'all' 
    ? artworks 
    : artworks.filter(work => work.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-earth-dark via-earth-medium to-earth-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-terracotta rounded-full top-10 left-10 animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute w-64 h-64 bg-earth-clay rounded-full bottom-10 right-10 animate-[float_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-[slideUp_0.8s_ease-out]">
            Clay <span className="text-terracotta">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-earth-sand max-w-3xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Explore handcrafted clay sculptures spanning terracotta, stoneware, and earthenware
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b-2 border-earth-sand sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 transform hover:scale-110 ${
                  activeFilter === category
                    ? 'bg-terracotta text-white shadow-lg scale-110'
                    : 'bg-earth-sand text-earth-dark hover:bg-earth-medium hover:text-white shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-earth-sand">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredArtworks.map((work, index) => (
              <div
                key={work.id}
                onClick={() => setSelectedWork(work)}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2"
                style={{animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`}}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                      work.price === 'Available' 
                        ? 'bg-green-500 text-white group-hover:scale-110' 
                        : 'bg-red-500 text-white group-hover:scale-110'
                    }`}>
                      {work.price}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-earth-dark group-hover:text-terracotta transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-sm text-earth-medium capitalize mb-2">
                    {work.category} • {work.year}
                  </p>
                  <p className="text-sm text-earth-light">{work.dimensions}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-earth-medium">No artworks found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for Selected Work */}
      {selectedWork && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-[scaleIn_0.3s_ease-out]"
          onClick={() => setSelectedWork(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-full">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-earth-sand text-earth-dark rounded-full flex items-center justify-center hover:bg-terracotta hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90 shadow-md hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-earth-dark hover:text-terracotta transition-colors duration-300">{selectedWork.title}</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold text-earth-dark">Category:</span>
                    <span className="ml-2 capitalize text-earth-medium">{selectedWork.category}</span>
                  </div>
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold text-earth-dark">Year:</span>
                    <span className="ml-2 text-earth-medium">{selectedWork.year}</span>
                  </div>
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold text-earth-dark">Dimensions:</span>
                    <span className="ml-2 text-earth-medium">{selectedWork.dimensions}</span>
                  </div>
                  <div className="hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold text-earth-dark">Status:</span>
                    <span className={`ml-2 font-bold ${
                      selectedWork.price === 'Available' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {selectedWork.price}
                    </span>
                  </div>
                </div>

                <p className="text-earth-medium leading-relaxed mb-8 hover:text-earth-dark transition-colors duration-300">
                  {selectedWork.description}
                </p>

                {selectedWork.price === 'Available' && (
                  <button className="btn-primary w-full transform hover:-rotate-1">
                    Inquire About This Piece
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-earth-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-terracotta rounded-full -bottom-48 left-1/2 animate-[float_12s_ease-in-out_infinite]"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Commission a <span className="text-terracotta">Custom Piece</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-earth-sand">
            Interested in a bespoke clay sculpture tailored to your vision? Let's collaborate to create something unique.
          </p>
          <a href="/contact" className="bg-terracotta text-white px-8 py-4 rounded-lg hover:bg-earth-dark hover:text-white transition-all duration-300 font-semibold text-lg inline-block shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2">
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Products;