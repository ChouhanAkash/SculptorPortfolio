import React, { useState } from 'react';

function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);

  const categories = ['all', 'ganesh', 'durga', 'laxmi', 'Vishwakarma'];

  const artworks = [
    {
      id: 1,
      title: 'Ganesh Ji - 2 Feet',
      category: 'ganesh',
      year: '2026',
      dimensions: '2 Feet Height',
      description: 'Handcrafted Ganesh idol in natural clay with intricate details. Perfect for home worship.',
      image: '/src/assets/DSC07114.jpg',
      price: 'Available',
    },
    {
      id: 2,
      title: 'Ganesh Ji - 5 Feet',
      category: 'ganesh',
      year: '2026',
      dimensions: '5 Feet Height',
      description: 'Large Ganesh idol made from pure mud, straw and wood base. Ideal for community celebrations.',
      image: '/src/assets/DSC07117.jpg',
      price: 'Available',
    },
    {
      id: 3,
      title: 'Ganesh Ji - 7 Feet',
      category: 'ganesh',
      year: '2026',
      dimensions: '7 Feet Height',
      description: 'Grand Ganesh idol crafted with devotion. Made for large pandals and celebrations.',
      image: '/src/assets/DSC07121.jpg',
      price: 'Available',
    },
    {
      id: 4,
      title: 'Durga Maa - 5 Feet',
      category: 'durga',
      year: '2026',
      dimensions: '5 Feet Height',
      description: 'Divine Durga Maa idol with traditional design. Made with natural materials and devotion.',
      image: '/src/assets/DSC07123.jpg',
      price: 'Available',
    },
    {
      id: 5,
      title: 'Durga Maa - 7 Feet',
      category: 'durga',
      year: '2026',
      dimensions: '7 Feet Height',
      description: 'Majestic Durga Maa idol for Navratri and special occasions. Eco-friendly clay construction.',
      image: '/src/assets/DSC07126.jpg',
      price: 'Available',
    },
    {
      id: 6,
      title: 'Laxmi Ji - 2 Feet',
      category: 'laxmi',
      year: '2026',
      dimensions: '2 Feet Height',
      description: 'Beautiful Laxmi Ji idol for Diwali and prosperity blessings. Made from sacred earth.',
      image: '/src/assets/DSC07130.jpg',
      price: 'Available',
    },
    {
      id: 7,
      title: 'Laxmi Ji - 5 Feet',
      category: 'laxmi',
      year: '2026',
      dimensions: '5 Feet Height',
      description: 'Elegant Laxmi Ji idol with detailed ornamentation. Perfect for temple and home.',
      image: '/src/assets/DSC07133.jpg',
      price: 'Available',
    },
    {
      id: 8,
      title: 'Traditional Diya Set',
      category: 'diya',
      year: '2026',
      dimensions: 'Set of 12',
      description: 'Handmade clay diyas for festivals. Natural earthen lamps crafted with care.',
      image: '/src/assets/DSC07138.jpg',
      price: 'Available',
    },
    {
      id: 9,
      title: 'Large Ceremonial Diya',
      category: 'diya',
      year: '2026',
      dimensions: '6" diameter',
      description: 'Large clay diya for special ceremonies and aarti. Traditional design.',
      image: '/src/assets/Intrvw 2ndcut.01_30_44_29.Still004.jpg',
      price: 'Available',
    },
    {
      id: 10,
      title: 'Decorative Diya Collection',
      category: 'diya',
      year: '2026',
      dimensions: 'Various sizes',
      description: 'Artisan clay diyas with traditional patterns. Made for auspicious occasions.',
      image: '/src/assets/Intrvw 2ndcut.01_30_46_07.Still003.jpg',
      price: 'Available',
    },
    {
      id: 11,
      title: 'Ganesh Ji Traditional',
      category: 'ganesh',
      year: '2026',
      dimensions: '3 Feet Height',
      description: 'Classic Ganesh idol in pure clay. Made with traditional Bihar techniques.',
      image: '/src/assets/Intrvw 2ndcut.01_31_39_07.Still005.jpg',
      price: 'Available',
    },
    {
      id: 12,
      title: 'Durga Maa - 2 Feet',
      category: 'durga',
      year: '2026',
      dimensions: '2 Feet Height',
      description: 'Compact Durga Maa idol for home worship. Eco-friendly and sacred.',
      image: '/src/assets/moortikar 2.jpg',
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
            Divine Idol <span className="text-terracotta">Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-earth-sand max-w-3xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Handcrafted clay idols of Ganesh Ji, Durga Maa, Laxmi Ji and traditional diyas - Available in 2ft, 5ft & 7ft
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
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 text-lg ${
                  activeFilter === category
                    ? 'bg-terracotta text-blue shadow-lg scale-110'
                    : 'bg-earth-sand text-earth-dark hover:bg-earth-medium hover:text-white shadow-md'
                }`}
              >
                {category === 'all' ? 'All Idols' : category === 'ganesh' ? 'Ganesh' : category === 'durga' ? 'Durga' : category === 'laxmi' ? 'Laxmi' : category === 'diya' ? 'Diya' : category}
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
            Order Your <span className="text-terracotta">Divine Idol</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-earth-sand">
            Need a custom size or special design for your celebration? Contact Jaydeep for personalized idols.
          </p>
          <a href="/contact" className="bg-terracotta text-white px-8 py-4 rounded-lg hover:bg-earth-dark hover:text-white transition-all duration-300 font-semibold text-lg inline-block shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-2">
            Place Your Order
          </a>
        </div>
      </section>
    </div>
  );
}

export default Products;