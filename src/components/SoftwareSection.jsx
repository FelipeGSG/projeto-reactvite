import React from 'react';

const softwareData = [
  {
    title: "Windows",
    description: "Sistema operacional da Microsoft amplamente utilizado em desktops.",
    image: "https://img.icons8.com/?size=512&id=108792&format=png"
  },
  {
    title: "Linux",
    description: "Sistema operacional de código aberto, usado por desenvolvedores e servidores.",
    image: "https://cdn-icons-png.flaticon.com/512/226/226772.png"
  },
  {
    title: "macOS",
    description: "Sistema operacional exclusivo da Apple com foco em design e desempenho.",
    image: "https://cdn-icons-png.flaticon.com/512/2/2235.png"
  },
  {
    title: "VS Code",
    description: "Editor de código-fonte leve e extensível criado pela Microsoft.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png"
  },
  {
    title: "IntelliJ IDEA",
    description: "IDE poderosa para desenvolvimento em Java e outras linguagens.",
    image: "https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png"
  },
  {
    title: "Eclipse",
    description: "IDE tradicional e modular, bastante usada em Java.",
    image: "https://images.sftcdn.net/images/t_app-icon-m/p/81c7805e-96d1-11e6-8f4b-00163ec9f5fa/3464099981/eclipse-download%20(3).png"
  },
  {
    title: "MySQL",
    description: "Sistema de gerenciamento de banco de dados relacional popular.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
  },
  {
    title: "SQLite",
    description: "Banco de dados leve e embutido usado em apps locais e mobile.",
    image: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png"
  }
];

export default function SoftwareSections() {
  return (
    <section className="section">
      <h2 className="section-title">Softwares e Ferramentas</h2>
      <div className="software-grid">
        {softwareData.map((item, index) => (
          <div className="software-card" key={index}>
            <img src={item.image} alt={item.title} className="software-image" />
            <h3 className="software-title">{item.title}</h3>
            <p className="software-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
