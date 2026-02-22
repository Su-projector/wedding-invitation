import Hero from './sections/Hero';
import Journey from './sections/Journey';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import Venue from './sections/Venue';
import RSVP from './sections/RSVP';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import MusicToggle from './components/MusicToggle';
import FallingPetals from './components/FallingPetals';

function App() {
  const weddingDate = '2026-06-20T00:00:00';

  return (
    <div className="relative min-h-screen">
      {/* Background Petals */}
      <FallingPetals />

      {/* Hero Section */}
      <main>
        <div className="relative">
          <Hero />

          {/* Injecting Countdown into Hero via absolute positioning or portal-like approach */}
          {/* For simplicity in this assembly, Hero has a slot or we just overlay */}
          <div className="absolute top-[65%] left-1/2 -translate-x-1/2 z-20">
            <Countdown targetDate={weddingDate} />
          </div>
        </div>

        {/* Our Journey Section */}
        <Journey />

        {/* Wedding Events Section */}
        <Events />

        {/* Photo Gallery Section */}
        <Gallery />

        {/* Venue Section */}
        <Venue />

        {/* RSVP & Social Section */}
        <RSVP />
      </main>

      {/* Floating Music Toggle */}
      <MusicToggle />

      {/* Elegant Footer */}
      <Footer />
    </div>
  );
}

export default App;
