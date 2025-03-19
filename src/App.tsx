import React, { useState } from 'react';
import { ChevronDown, Star, Salad as Galaxy, Rocket, Sun, Moon } from 'lucide-react';

interface FactSection {
  title: string;
  content: string;
  image: string;
}

function App() {
  const [activeSection, setActiveSection] = useState<number>(0);

  const facts: FactSection[] = [
    {
      title: "The Vastness of Our Galaxy",
      content: "The Milky Way is approximately 100,000 light-years across and contains between 100-400 billion stars. If you could travel at the speed of light, it would still take you 100,000 years to cross it!",
      image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&q=80&w=1920"
    },
    {
      title: "Our Galactic Center",
      content: "At the heart of our galaxy lies a supermassive black hole called Sagittarius A*, which is about 4 million times the mass of our Sun. Despite its enormous mass, it's actually quite small compared to black holes in other galaxies.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1920"
    },
    {
      title: "Stellar Nurseries",
      content: "The Milky Way contains numerous regions where new stars are born, called stellar nurseries. These cosmic clouds of gas and dust are where the next generation of stars comes to life.",
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=1920')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6">Explore the Milky Way</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Embark on a journey through our cosmic home, discovering the wonders that lie within our galaxy
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('learn-more');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center mx-auto"
          >
            Begin Your Journey
            <ChevronDown className="ml-2" />
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div id="learn-more" className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid gap-16">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  {index === 0 && <Galaxy className="text-yellow-500" />}
                  {index === 1 && <Star className="text-yellow-500" />}
                  {index === 2 && <Sun className="text-yellow-500" />}
                  {fact.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {fact.content}
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src={fact.image} 
                  alt={fact.title}
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-16">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <p className="text-gray-400">
      Explore the wonders of our cosmic neighborhood. Images courtesy of Unsplash.
    </p>
    <p className="text-gray-400 mt-2">
      Created by Alireza Minagar in March 2025
    </p>
  </div>
</footer>
    </div>
  );
}

export default App