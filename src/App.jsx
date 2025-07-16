import { useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const musicRef = useRef(null);
  const tourRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="nav">
          <div className="nav-container">
            <div className="logo">Burna Boy</div>
            <div className="nav-links">
              <button onClick={() => scrollToSection(homeRef)}>Home</button>
              <button onClick={() => scrollToSection(aboutRef)}>About</button>
              <button onClick={() => scrollToSection(musicRef)}>Music</button>
              <button onClick={() => scrollToSection(tourRef)}>Tour</button>
              <button onClick={() => scrollToSection(contactRef)}>Contact</button>
            </div>
          </div>
        </nav>

        {/* Home Section */}
        <motion.section
            ref={homeRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="home"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542825993-1a65f4301f07)' }}
        >
          <div className="home-content">
            <h1>Burna Boy</h1>
            <p>African Giant - Global Superstar</p>
            <button className="primary-button">Listen Now</button>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
            ref={aboutRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about"
        >
          <div className="section-container">
            <h2>About Burna Boy</h2>
            <p>
              Damini Ebunoluwa Ogulu, known professionally as Burna Boy, is a Nigerian singer, songwriter, and record producer.
              Dubbed the "African Giant," he rose to global fame with hits like "Ye" and "On The Low." His fusion of Afrobeat,
              dancehall, and reggae has earned him a Grammy Award and multiple BET Awards. Burna’s music carries messages of African
              pride, resilience, and unity, making him a cultural icon.
            </p>
          </div>
        </motion.section>

        {/* Music Section */}
        <motion.section
            ref={musicRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="music"
        >
          <div className="section-container">
            <h2>Music</h2>
            <div className="music-grid">
              <div className="card">
                <h3>Love, Damini</h3>
                <p>2022 album featuring hits like "Last Last" and "For My Hand."</p>
              </div>
              <div className="card">
                <h3>African Giant</h3>
                <p>2019 Grammy-nominated album with tracks like "Anybody" and "Gum Body."</p>
              </div>
              <div className="card">
                <h3>Twice as Tall</h3>
                <p>2020 Grammy-winning album including "Wonderful" and "Real Life."</p>
              </div>
            </div>
            <iframe
                src="https://open.spotify.com/embed/artist/3wcj11K77LjEY1PkEazffa"
                width="100%"
                height="380"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
          </div>
        </motion.section>

        {/* Tour Section */}
        <motion.section
            ref={tourRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tour"
        >
          <div className="section-container">
            <h2>Tour Dates</h2>
            <div className="tour-dates">
              <div className="card">
                <h3>London, UK</h3>
                <p>August 15, 2025 - O2 Arena</p>
                <button className="primary-button">Get Tickets</button>
              </div>
              <div className="card">
                <h3>New York, NY</h3>
                <p>September 20, 2025 - Madison Square Garden</p>
                <button className="primary-button">Get Tickets</button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
            ref={contactRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact"
        >
          <div className="section-container">
            <h2>Contact</h2>
            <p>Stay connected with Burna Boy for updates on music, tours, and more!</p>
            <div className="social-links">
              <a href="https://www.instagram.com/burnaboygram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://x.com/burnaboy" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.youtube.com/@BurnaBoy" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </div>
          </div>
        </motion.section>
      </div>
  );
}

export default App;
