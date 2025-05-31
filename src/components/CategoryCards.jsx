import React from 'react';
import '../styles.css';

const categories = [
  {
    id: "hardware",
    title: "Hardware",
    description: "Conheça os principais componentes físicos de um computador.",
    color: "#4f46e5"
  },
  {
    id: "software",
    title: "Software",
    description: "Explore programas, sistemas operacionais, IDEs e bancos de dados.",
    color: "#6366f1"
  },
  {
    id: "tech",
    title: "Linguagens e relacionados",
    description: "Aprenda linguagens de programação, Git, React e outras tecnologias.",
    color: "#7c3aed"
  }
];

export default function CategoryCards({ setActiveTab }) {
  return (
    <div className="cards-container">
      {categories.map((cat, index) => (
        <button
          key={index}
          className="card"
          style={{ borderColor: cat.color, cursor: "pointer" }}
          onClick={() => setActiveTab(cat.id)}
        >
          <h3>{cat.title}</h3>
          <p>{cat.description}</p>
        </button>
      ))}
    </div>
  );
}
