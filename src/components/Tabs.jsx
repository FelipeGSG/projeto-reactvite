import React, { useState } from 'react';
import TabContent from './TabContent';

const tabData = {
  Hardware: [
    { name: "Memória RAM", anchor: "memoria-ram" },
    { name: "Memória ROM", anchor: "memoria-rom" },
    { name: "HD / Disco Rígido", anchor: "hd" },
    { name: "SSD", anchor: "ssd" },
    { name: "Placa-mãe", anchor: "placa-mae" },
    { name: "Processador (CPU)", anchor: "cpu" },
    { name: "Placa de vídeo (GPU)", anchor: "gpu" },
    { name: "Fonte de alimentação", anchor: "fonte" },
    { name: "Gabinete", anchor: "gabinete" },
    { name: "Cooler / Ventoinha", anchor: "cooler" }
  ],
  Software: [
    { name: "Windows", anchor: "windows" },
    { name: "Linux", anchor: "linux" },
    { name: "macOS", anchor: "macos" },
    { name: "VS Code", anchor: "vscode" },
    { name: "IntelliJ", anchor: "intellij" },
    { name: "MySQL", anchor: "mysql" },
    { name: "SQLite", anchor: "sqlite" }
  ],
  Linguagens: [
    { name: "HTML", anchor: "html" },
    { name: "CSS", anchor: "css" },
    { name: "JavaScript", anchor: "javascript" },
    { name: "Python", anchor: "python" },
    { name: "Java", anchor: "java" },
    { name: "Git (bônus)", anchor: "git" },
    { name: "React (bônus)", anchor: "react" },
    { name: "Node.js (bônus)", anchor: "node" }
  ]
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Hardware');

  return (
    <div className="tabs-container">
      <div className="tabs">
        {Object.keys(tabData).map(tab => (
          <button
            key={tab}
            className={`tab ${tab === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <TabContent items={tabData[activeTab]} />
    </div>
  );
}
