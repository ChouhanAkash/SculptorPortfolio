import React from 'react';

function About() {
  const skills = [
    { name: 'Hand-Building', level: 95 },
    { name: 'Wheel Throwing', level: 90 },
    { name: 'Terracotta Work', level: 92 },
    { name: 'Glazing & Finishing', level: 88 },
    { name: 'Kiln Firing', level: 87 },
    { name: 'Surface Decoration', level: 93 },
  ];

  const milestones = [
    { year: '2010', title: 'First Solo Exhibition', description: 'Showcased terracotta collection at Local Gallery' },
    { year: '2013', title: 'Master Potter Certification', description: 'Completed advanced training in traditional techniques' },
    { year: '2016', title: 'Public Installation', description: 'Created large-scale clay sculpture for city park' },
    { year: '2019', title: 'Studio Workshop Launch', description: 'Opened teaching studio for aspiring clay artists' },
    { year: '2023', title: 'International Recognition', description: 'Featured in Global Pottery & Sculpture Magazine' },
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
                About The <span className="text-terracotta">Artist</span>
              </h1>
              <p className="text-lg md:text-xl text-earth-sand leading-relaxed">
                Transforming raw earth into expressive sculptures that honor ancient pottery traditions while embracing contemporary artistic vision.
              </p>
            </div>
            <div className="group">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=800&fit=crop"
                alt="Artist at work with clay"
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
                My love affair with clay began in childhood, watching my grandmother mold simple vessels on her potter's wheel. The way her hands guided the spinning earth, coaxing it into elegant forms, seemed like magic. That fascination never left me.
              </p>
              <p className="hover:text-earth-dark transition-colors duration-300">
                After formal training at the Academy of Ceramic Arts, I spent years studying traditional pottery techniques across different cultures. From Japanese raku to African coil building, each tradition taught me new ways to honor the earth and its potential.
              </p>
              <p className="hover:text-earth-dark transition-colors duration-300">
                Today, my work celebrates the humble beauty of clay. Whether working with terracotta's warm russet tones, stoneware's durability, or earthenware's earthy charm, I create pieces that connect viewers to our oldest artistic tradition.
              </p>
              <p className="hover:text-earth-dark transition-colors duration-300">
                Beyond creating, I'm passionate about keeping these ancient skills alive. Through workshops and mentorship, I help others discover the joy of working with clay, passing on techniques that have survived millennia.
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
                  <div className="flex-shrink-0 w-24 h-24 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    {milestone.year}
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
              { icon: '🏆', title: 'Best Clay Sculptor', org: 'National Pottery Festival 2022' },
              { icon: '🎨', title: 'Excellence in Terracotta', org: 'International Clay Society 2020' },
              { icon: '⭐', title: 'Master Artisan Award', org: 'Guild of Ceramic Artists 2019' },
              { icon: '🌟', title: 'Public Art Recognition', org: 'City Arts Commission 2021' },
              { icon: '🔥', title: 'Innovation in Firing', org: 'Modern Ceramics Review 2018' },
              { icon: '💫', title: 'Lifetime Achievement', org: 'Clay Arts Foundation 2023' }
            ].map((award, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 hover:rotate-2"
                style={{animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`}}
              >
                <div className="text-4xl mb-4 animate-[float_3s_ease-in-out_infinite]">{award.icon}</div>
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