import React, { useState } from 'react';
import HardwareSections from './components/HardwareSections';
import SoftwareSection from './components/SoftwareSection';
import TechSections from './components/Languages';
import CategoryCards from './components/CategoryCards';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('hardware');

  return (
    <div className="app">
      <header className="header">TechSolutions</header>
      <main className="main">
        <CategoryCards setActiveTab={setActiveTab} />

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'hardware' ? 'active' : ''}`}
              onClick={() => setActiveTab('hardware')}
            >
              Hardware
            </button>
            <button
              className={`tab ${activeTab === 'software' ? 'active' : ''}`}
              onClick={() => setActiveTab('software')}
            >
              Softwares
            </button>
            <button
              className={`tab ${activeTab === 'tech' ? 'active' : ''}`}
              onClick={() => setActiveTab('tech')}
            >
              Tecnologias
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'hardware' && <HardwareSections />}
            {activeTab === 'software' && <SoftwareSection />}
            {activeTab === 'tech' && <TechSections />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
