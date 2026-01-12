import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-earth-dark via-earth-medium to-earth-light text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-terracotta rounded-full -top-48 right-0 animate-[float_10s_ease-in-out_infinite]"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-[slideUp_0.8s_ease-out]">
            Get In <span className="text-terracotta">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-earth-sand max-w-3xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Have a question or interested in commissioning a clay sculpture? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-[slideUp_0.8s_ease-out]">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-earth-dark">
                Send a <span className="text-terracotta">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-earth-dark">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-earth-sand rounded-lg focus:border-terracotta focus:outline-none transition-all duration-300 hover:border-earth-light"
                    placeholder="John Doe"
                  />
                </div>

                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-earth-dark">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-earth-sand rounded-lg focus:border-terracotta focus:outline-none transition-all duration-300 hover:border-earth-light"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-earth-dark">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-earth-sand rounded-lg focus:border-terracotta focus:outline-none transition-all duration-300 hover:border-earth-light"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-earth-dark">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-earth-sand rounded-lg focus:border-terracotta focus:outline-none transition-all duration-300 hover:border-earth-light"
                  >
                    <option value="">Select a subject</option>
                    <option value="commission">Commission a Clay Sculpture</option>
                    <option value="purchase">Purchase Existing Work</option>
                    <option value="exhibition">Exhibition Inquiry</option>
                    <option value="workshop">Clay Workshop Information</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="transform transition-all duration-300 hover:translate-x-2">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-earth-dark">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-earth-sand rounded-lg focus:border-terracotta focus:outline-none transition-all duration-300 resize-none hover:border-earth-light"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full transform hover:-rotate-1">
                  Send Message
                </button>
              </form>
            </div>

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
                    <h3 className="font-semibold text-lg mb-1 text-earth-dark">Studio Address</h3>
                    <p className="text-earth-medium">
                      123 Pottery Lane<br />
                      Artist District<br />
                      Santa Fe, NM 87501
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
                    <h3 className="font-semibold text-lg mb-1 text-earth-dark">Phone</h3>
                    <p className="text-earth-medium">+1 (555) 123-4567</p>
                    <p className="text-earth-medium">Mon-Fri: 9am-6pm MST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-earth-dark">Email</h3>
                    <p className="text-earth-medium">clay@claycraft.com</p>
                    <p className="text-earth-medium">Response within 24-48 hours</p>
                  </div>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="bg-earth-sand p-6 rounded-lg mb-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="font-bold text-xl mb-4 text-earth-dark">Studio Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold text-earth-dark">Monday - Friday</span>
                    <span className="text-earth-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold text-earth-dark">Saturday</span>
                    <span className="text-earth-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold text-earth-dark">Sunday</span>
                    <span className="text-earth-medium">By Appointment</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-earth-light rounded-lg overflow-hidden h-64 hover:shadow-xl transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.76430469145!2d-106.09267898875468!3d35.667396467967305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87185043e79852a9%3A0x8c902373fd88df40!2sSanta%20Fe%2C%20NM!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Studio Location"
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
              { q: 'How long does a custom clay commission take?', a: 'Custom clay commissions typically take 4-8 weeks, including drying time, firing, and glazing. Larger pieces may require additional time.' },
              { q: 'What types of clay do you work with?', a: 'I work primarily with terracotta, stoneware, and earthenware. Each type has unique characteristics - terracotta for its warm color, stoneware for durability, and earthenware for its traditional appeal.' },
              { q: 'Can I visit your studio?', a: 'Yes! Studio visits are welcome by appointment. You can watch the creative process and discuss custom projects. Please book at least 48 hours in advance.' },
              { q: 'Do you offer pottery classes?', a: 'Yes, I offer beginner to advanced clay workshops covering hand-building, wheel throwing, and glazing techniques. Check my workshop schedule or contact me for details.' },
              { q: 'How should I care for my clay sculpture?', a: 'Keep sculptures away from extreme temperature changes. Dust with a soft cloth. Outdoor pieces should be brought inside during freezing weather unless specifically fired for outdoor use.' }
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
