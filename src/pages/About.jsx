import React from 'react';

function About() {
  const skills = [
    { name: 'Idol Sculpting', level: 98 },
    { name: 'Traditional Techniques', level: 95 },
    { name: 'Clay Preparation', level: 93 },
    { name: 'Natural Materials', level: 97 },
    { name: 'Detail Work', level: 92 },
    { name: 'Sacred Artistry', level: 96 },
  ];

  const milestones = [
    { year: '1995', title: 'Learning Begins', description: 'Started learning murtikar art from elders in Thakurganj', image: '/src/assets/Moortikar 1.jpg' },
    { year: '2000', title: 'Journey Across India', description: 'Traveled to learn from master craftsmen', image: '/src/assets/moortikar 2.jpg' },
    { year: '2012', title: 'Workshop Established', description: 'Set up dedicated idol-making workshop', image: '/src/assets/DSC07126.jpg' },
    { year: '2018', title: 'Natural Materials Commitment', description: 'Exclusively using wood, straw, and pure mud', image: '/src/assets/DSC07130.jpg' },
    { year: '2026', title: 'Master Murtikar', description: '30+ years serving devotees with divine idols', image: '/src/assets/DSC07138.jpg' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-earth-dark via-earth-medium to-earth-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-terracotta rounded-full top-0 right-0 animate-[float_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-[slideUp_0.8s_ease-out]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet Jaydeep - The <span className="text-terracotta">Murtikar</span>
              </h1>
              <p className="text-lg md:text-xl text-earth-sand leading-relaxed">
                The Artisan of Thakurganj, Bihar - Handcrafting divine idols for over 30 years using sacred traditional techniques
              </p>
            </div>
            <div className="group">
              <img
                src="/src/assets/DSC07138.jpg"
                alt="Jaydeep the Murtikar at work"
                className="rounded-lg shadow-2xl w-full h-[400px] md:h-[500px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-earth-dark">
              My <span className="text-terracotta">Journey</span>
            </h2>
            <div className="space-y-6 text-lg text-earth-medium leading-relaxed">
              <p className="hover:text-earth-dark transition-colors duration-300">
                For over 30 years, I have been handcrafting divine idols using age-old techniques passed down through generations. My journey began in Thakurganj, Bihar, where I learned the sacred art of murtikar from my elders.
              </p>
              <p className="hover:text-earth-dark transition-colors duration-300">
                My travels across India introduced me to masters of the craft. From the traditional techniques of West Bengal to the intricate styles of Maharashtra, each experience shaped my artistry and deepened my understanding of this sacred work.
              </p>
              <p className="hover:text-earth-dark transition-colors duration-300">
                Today, in my small workshop in Thakurganj, I bring gods to life using only natural materials - wood for structure, straw for strength, and sacred mud from the earth. I specialize in creating idols of Ganesh Ji, Durga Maa, Laxmi Ji, and traditional diyas in 2, 5, and 7 feet sizes.
              </p>
              <p className="hover:text-earth-dark transition-colors duration-300">
                Each idol is more than just a statue—it is a reflection of culture, tradition, and devotion. Made for people who want to celebrate faith while respecting the earth. Every piece is crafted with prayer and dedication to preserve our ancient traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-earth-sand">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-earth-dark">
            Technical <span className="text-terracotta">Expertise</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                  style={{animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`}}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg text-earth-dark">{skill.name}</span>
                    <span className="text-terracotta font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-terracotta h-3 rounded-full transition-all duration-1000 hover:bg-earth-dark"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-earth-dark">
            Career <span className="text-terracotta">Milestones</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-6 items-start group hover:scale-105 transition-all duration-300"
                  style={{animation: `slideUp 0.6s ease-out ${index * 0.15}s both`}}
                >
                  <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 relative">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-terracotta bg-opacity-80 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow bg-earth-sand p-6 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-earth-dark group-hover:text-terracotta transition-colors duration-300">{milestone.title}</h3>
                    <p className="text-earth-medium">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-earth-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-terracotta rounded-full -bottom-48 -left-48 animate-[float_12s_ease-in-out_infinite]"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Artistic <span className="text-terracotta">Philosophy</span>
            </h2>
            <blockquote className="text-xl md:text-2xl italic leading-relaxed mb-6 hover:scale-105 transition-transform duration-300">
              "Clay is the earth's memory. Every piece I create is a conversation between my hands, the ancient soil, and the fire that transforms it. In this dialogue, art is born."
            </blockquote>
            <p className="text-lg text-earth-sand leading-relaxed hover:text-white transition-colors duration-300">
              I believe true art connects us to our roots—literally. Working with earth reminds us of our origins and our relationship with nature. Each sculpture carries within it the story of the soil, the water that shaped it, and the fire that gave it permanence.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-24 bg-earth-sand">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-earth-dark">
            Awards & <span className="text-terracotta">Recognition</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: '30+ Years Experience', org: 'Master Murtikar of Thakurganj' },
              { title: 'Traditional Craftsman', org: 'Preserving Ancient Techniques' },
              { title: '100% Natural Materials', org: 'Only Wood, Straw & Pure Mud' },
              { title: 'Custom Sizes', org: '2 ft, 5 ft & 7 ft Idols' },
              { title: 'Sacred Devotion', org: 'Each Idol Made with Prayer' },
              { title: 'Community Trusted', org: 'Serving Devotees for Decades' }
            ].map((award, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:rotate-2"
                style={{animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`}}
              >
                <h3 className="font-bold text-xl mb-2 text-earth-dark hover:text-terracotta transition-colors duration-300">{award.title}</h3>
                <p className="text-earth-medium">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;