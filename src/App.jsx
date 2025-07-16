import { useRef } from 'react';
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-poppins">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-montserrat font-bold">Burna Boy</div>
            <div className="flex space-x-8">
              <button onClick={() => scrollToSection(homeRef)} className="hover:text-yellow-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection(aboutRef)} className="hover:text-yellow-400 transition-colors">About</button>
              <button onClick={() => scrollToSection(musicRef)} className="hover:text-yellow-400 transition-colors">Music</button>
              <button onClick={() => scrollToSection(tourRef)} className="hover:text-yellow-400 transition-colors">Tour</button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-yellow-400 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542825993-1a65f4301f07)' }}>
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-4">Burna Boy</h1>
          <p className="text-xl md:text-2xl mb-8">African Giant - Global Superstar</p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors">
            Listen Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-8">About Burna Boy</h2>
          <p className="text-lg leading-relaxed">
            Damini Ebunoluwa Ogulu, known professionally as Burna Boy, is a Nigerian singer, songwriter, and record producer. 
            Dubbed the "African Giant," he rose to global fame with hits like "Ye" and "On The Low." His fusion of Afrobeat, 
            dancehall, and reggae has earned him a Grammy Award and multiple BET Awards. Burna’s music carries messages of African 
            pride, resilience, and unity, making him a cultural icon.
          </p>
        </div>
      </section>

      {/* Music Section */}
      <section ref={musicRef} className="min-h-screen py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-8 text-center">Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Love, Damini</h3>
              <p>2022 album featuring hits like "Last Last" and "For My Hand."</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">African Giant</h3>
              <p>2019 Grammy-nominated album with tracks like "Anybody" and "Gum Body."</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Twice as Tall</h3>
              <p>2020 Grammy-winning album including "Wonderful" and "Real Life."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section ref={tourRef} className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-montserrat font-bold mb-8 text-center">Tour Dates</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">London, UK</h3>
              <p>August 15, 2025 - O2 Arena</p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500">Get Tickets</button>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">New York, NY</h3>
              <p>September 20, 2025 - Madison Square Garden</p>
              <button className="mt-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500">Get Tickets</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-8">Contact</h2>
          <p className="text-lg mb-8">Stay connected with Burna Boy for updates on music, tours, and more!</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-2xl hover:text-yellow-400"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" className="text-2xl hover:text-yellow-400"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="text-2xl hover:text-yellow-400"><i className="fab fa-youtube"></i> YouTube</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;