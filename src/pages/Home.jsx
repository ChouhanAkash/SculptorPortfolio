import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const featuredWorks = [
    {
      id: 1,
      title: 'Ganesh Ji',
      category: 'Clay Idol',
      image: '/assets/DSC07114.jpg',
    },
    {
      id: 2,
      title: 'Durga Maa',
      category: 'Clay Idol',
      image: '/assets/DSC07117.jpg',
    },
    {
      id: 3,
      title: 'Laxmi Ji',
      category: 'Clay Idol',
      image: '/assets/DSC07121.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-dark via-earth-medium to-earth-light text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: 'url(/assets/DSC07133.jpg)',
          }}
        ></div>
        
        {/* Floating clay particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-2 h-2 bg-terracotta rounded-full opacity-60 animate-[float_4s_ease-in-out_infinite]" style={{top: '20%', left: '10%'}}></div>
          <div className="absolute w-3 h-3 bg-earth-clay rounded-full opacity-40 animate-[float_5s_ease-in-out_infinite]" style={{top: '60%', left: '80%'}}></div>
          <div className="absolute w-2 h-2 bg-terracotta rounded-full opacity-50 animate-[float_6s_ease-in-out_infinite]" style={{top: '80%', left: '20%'}}></div>
          <div className="absolute w-4 h-4 bg-earth-clay rounded-full opacity-30 animate-[float_7s_ease-in-out_infinite]" style={{top: '40%', left: '70%'}}></div>
        </div>
        
        <div className="relative z-10 container-custom text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-[slideUp_1s_ease-out]">
            पवित्र मिट्टी में दिव्य मूर्तियाँ
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-earth-sand animate-[slideUp_1s_ease-out_0.2s_both]">
            Handcrafted divine idols using age-old techniques - Celebrating faith while respecting the earth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[slideUp_1s_ease-out_0.4s_both]">
            <Link to="/products" className="btn-primary transform hover:rotate-1">
              View Gallery
            </Link>
            <Link to="/about" className="bg-earth-sand text-earth-dark px-6 py-3 rounded-lg hover:bg-earth-medium hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-rotate-1 hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-[slideUp_0.8s_ease-out]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-earth-dark">
                Meet Jaydeep - The <span className="text-terracotta">Murtikar</span>
              </h2>
              <p className="text-lg text-earth-medium mb-6 leading-relaxed">
                For over 30 years, Jaydeep has been handcrafting divine idols using age-old techniques passed down through generations. His journeys across India introduced him to masters of the craft, and each experience shaped his artistry.
              </p>
              <p className="text-lg text-earth-medium mb-8 leading-relaxed">
                Today, in his small workshop in Thakurganj, Bihar, he brings gods to life using only natural materials like wood, straw, and mud. Each idol is more than just a statue—it is a reflection of culture, tradition, and devotion.
              </p>
              <Link to="/about" className="btn-outline transform hover:rotate-1">
                Discover My Journey
              </Link>
            </div>
            <div className="order-1 lg:order-2 group">
              <img
                src="/assets/DSC07138.jpg"
                alt="Jaydeep the Murtikar at work"
                className="rounded-lg shadow-2xl w-full h-[400px] md:h-[500px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-16 md:py-24 bg-earth-sand">
        <div className="container-custom">
          <div className="text-center mb-12 animate-[slideUp_0.6s_ease-out]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-earth-dark">
              Featured <span className="text-terracotta">Creations</span>
            </h2>
            <p className="text-lg text-earth-medium max-w-2xl mx-auto">
              Explore handcrafted clay sculptures that bridge ancient techniques with modern artistic vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work, index) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 bg-white"
                style={{animation: `slideUp 0.6s ease-out ${index * 0.2}s both`}}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-dark via-transparent to-transparent opacity-70"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300 group-hover:translate-y-[-8px]">
                  <p className="text-sm font-semibold text-terracotta mb-2 transform transition-all duration-300 group-hover:scale-110 inline-block">{work.category}</p>
                  <h3 className="text-2xl font-bold">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary transform hover:-rotate-1">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-earth-dark">
              From Earth <span className="text-terracotta">To Art</span>
            </h2>
            <p className="text-lg text-earth-medium max-w-2xl mx-auto">
              Every sculpture undergoes a transformative journey from raw clay to finished masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {num: 1, title: 'Preparation', desc: 'Wedging and conditioning the clay to remove air bubbles', image: '/assets/DSC07130.jpg'},
              {num: 2, title: 'Shaping', desc: 'Hand-building or wheel-throwing to create the basic form', image: '/assets/Moortikar 1.jpg'},
              {num: 3, title: 'Detailing', desc: 'Carving, sculpting, and adding intricate surface textures', image: '/assets/moortikar 2.jpg'},
              {num: 4, title: 'Firing', desc: 'Kiln firing to transform soft clay into permanent art', image: '/assets/DSC07126.jpg'}
            ].map((step, index) => (
              <div 
                key={step.num}
                className="text-center p-6 group hover:bg-earth-sand rounded-lg transition-all duration-300"
                style={{animation: `scaleIn 0.5s ease-out ${index * 0.15}s both`}}
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg overflow-hidden relative">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-terracotta bg-opacity-70 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{step.num}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-earth-dark group-hover:text-terracotta transition-colors duration-300">{step.title}</h3>
                <p className="text-earth-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-earth-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-64 h-64 bg-terracotta rounded-full -top-32 -left-32 animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute w-96 h-96 bg-earth-clay rounded-full -bottom-48 -right-48 animate-[float_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Commission a <span className="text-terracotta">Custom Piece</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-earth-sand">
            Interested in a unique clay sculpture crafted just for you? Let's bring your vision to life.
          </p>
          <Link to="/contact" className="bg-terracotta text-white px-8 py-4 rounded-lg hover:bg-earth-dark hover:text-white transition-all duration-300 font-semibold text-lg inline-block shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-2">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;