import React from 'react';
import './Homee.css';

const summitStats = [
  { label: 'Climate Startups', value: '400+' },
  { label: 'Investors', value: '150+' },
  { label: 'Industry Professionals', value: '350+' },
  { label: 'Speakers', value: '100+' },
  { label: 'Delegates', value: '700+' },
];

const summitHighlights = [
  'India’s Largest Climate Startup Innovation Summit',
  'Key Themes: Decarbonization, Bioeconomy, AI for Climate, Deep Tech',
  'Pitch Sessions, Expert Talks & Panel Discussions',
  'Networking with Top Investors & Startups',
  'Held at IIT Madras Research Park',
];

const testimonials = [
  {
    quote: 'An excellent platform for climate tech startups to showcase and connect with industry leaders.',
    author: 'Priya R., Climate Startup Founder',
  },
  {
    quote: 'CLIMAFIX Summit has significantly boosted investor engagement and helped scale innovation.',
    author: 'Rajesh S., Investor',
  },
  {
    quote: 'A must-attend event for anyone passionate about climate solutions in India.',
    author: 'Dr. Anjali K., Research Scientist',
  },
];

const HomePage = () => {
  return (
    <div className="homepage-root">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">CLIMAFIX Summit 2025</h1>
        <p className="hero-subtitle">
          India’s Largest Climate Startup Innovation Summit<br />
          September 11-12, IIT Madras Research Park
        </p>
        <div className="hero-buttons">
          <a
            href="https://climafix.in/summit/2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button register"
          >
            Register Now
          </a>
          <a
            href="https://climafix.in/summit/2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button agenda"
          >
            View Agenda
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2 className="stats-title">Summit Highlights</h2>
        <div className="stats-grid">
          {summitStats.map(({ label, value }) => (
            <div key={label} className="stats-item">
              <p className="stats-value">{value}</p>
              <p className="stats-label">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights List */}
      <section className="highlights-section">
        <h3 className="highlights-title">Why Attend?</h3>
        <ul className="highlights-list">
          {summitHighlights.map((highlight, idx) => (
            <li key={idx} className="highlights-item">{highlight}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials-section">
        <h3 className="testimonials-title">What Participants Say</h3>
        <div className="testimonials-list">
          {testimonials.map(({ quote, author }, idx) => (
            <blockquote key={idx} className="testimonial">
              <p className="testimonial-quote">"{quote}"</p>
              <cite className="testimonial-author">- {author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Footer Call to Action */}
      <footer className="footer-section">
        <p className="footer-title">
          Don’t miss out on the next CLIMAFIX Summit!
        </p>
        <a
          href="https://climafix.in/summit/2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-button"
        >
          Register Today
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
