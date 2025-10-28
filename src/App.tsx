import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      {/* Grid background overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;