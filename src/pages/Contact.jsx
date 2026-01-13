import React from 'react';

function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-earth-dark via-earth-medium to-earth-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-terracotta rounded-full -top-48 right-0 animate-[float_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-[slideUp_0.8s_ease-out]">
            Contact <span className="text-terracotta">Jaydeep</span>
          </h1>
          <p className="text-lg md:text-xl text-earth-sand max-w-3xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Order your divine clay idols for Ganesh Chaturthi, Durga Puja, Diwali and other celebrations
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="animate-[slideUp_0.8s_ease-out_0.2s_both]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-earth-dark">
                Contact <span className="text-terracotta">Information</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-earth-dark">Workshop Location</h3>
                    <p className="text-earth-medium">
                      Bhat Thala Chowk, Block Road<br />
                      Thakurganj<br />
                      Bihar, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-earth-dark">Phone / WhatsApp</h3>
                    <p className="text-earth-medium text-xl font-semibold">+91 91999 33692</p>
                    <p className="text-earth-medium">Call or message anytime</p>
                  </div>
                </div>
              </div>

              {/* Workshop Services */}
              <div className="bg-white p-6 rounded-lg mb-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-terracotta">
                <h3 className="font-bold text-xl mb-4 text-earth-dark">Idol Making Services</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span className="text-earth-medium">Ganesh Ji (2ft, 5ft, 7ft)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span className="text-earth-medium">Durga Maa (2ft, 5ft, 7ft)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span className="text-earth-medium">Laxmi Ji (2ft, 5ft, 7ft)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span className="text-earth-medium">Traditional Clay Diyas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span className="text-earth-medium">100% Natural Materials</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-earth-light rounded-lg overflow-hidden h-64 hover:shadow-xl transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.3738895542365!2d87.27652937531562!3d26.077774777148794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef69e1e2732e87%3A0x6e9ef5e9c5e0c8b0!2sThakurganj%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Workshop Location - Thakurganj, Bihar"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-earth-sand">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-earth-dark">
            Frequently Asked <span className="text-terracotta">Questions</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: 'What sizes of idols do you make?', a: 'I craft idols in three sizes: 2 feet (perfect for home), 5 feet (ideal for community celebrations), and 7 feet (for large pandals and grand celebrations). Custom sizes can be discussed.' },
              { q: 'What materials do you use?', a: 'I use only 100% natural materials - pure clay/mud from earth, wood for structural support, and straw for strength. No chemicals or artificial materials are used, making them completely eco-friendly and safe for immersion.' },
              { q: 'How long does it take to make an idol?', a: 'Depending on size and detail, small idols (2ft) take 3-5 days, medium idols (5ft) take 7-10 days, and large idols (7ft) take 10-15 days. For festival orders, please book 2-3 weeks in advance.' },
              { q: 'Do you deliver?', a: 'Yes, I provide delivery within Bihar and nearby regions. For local Thakurganj deliveries, I handle transport personally to ensure safe arrival. For distant orders, please contact me for arrangements.' },
              { q: 'Can I customize the idol design?', a: 'Absolutely! While I follow traditional designs, I can customize colors, ornaments, and specific features according to your preferences. Share your requirements when ordering.' }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{animation: `slideUp 0.5s ease-out ${index * 0.1}s both`}}
              >
                <h3 className="font-bold text-xl mb-3 text-earth-dark hover:text-terracotta transition-colors duration-300">{faq.q}</h3>
                <p className="text-earth-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
