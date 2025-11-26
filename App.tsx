import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Heritage } from './components/Heritage';
import { Menu } from './components/Menu';
import { Location } from './components/Location';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="antialiased text-brand-cream bg-brand-dark selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Menu />
        <Location />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;