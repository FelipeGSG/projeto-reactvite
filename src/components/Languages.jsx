import React from 'react';

const techData = [
  {
    title: "HTML",
    description: "Linguagem de marcação usada para estruturar páginas web.",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png"
  },
  {
    title: "CSS",
    description: "Estiliza o HTML e define aparência visual da interface.",
    image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7j353v8xe1h861uc5i53.png"
  },
  {
    title: "JavaScript",
    description: "Linguagem de programação que permite interatividade nas páginas.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
  },
  {
    title: "Java",
    description: "Linguagem multiplataforma amplamente usada em aplicações web e Android.",
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
  },
  {
    title: "Python",
    description: "Linguagem versátil e de fácil leitura, muito usada em IA e ciência de dados.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
  },
  {
    title: "Git",
    description: "Sistema de controle de versão usado para gerenciar código-fonte.",
    image: "https://pachecoandre.com.br/assets/imgs/posts/git.png"
  },
  {
    title: "Node.js",
    description: "Ambiente de execução para JavaScript no servidor.",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
  },
  {
    title: "React",
    description: "Biblioteca JavaScript para construção de interfaces de usuário.",
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
  }
];

export default function TechSections() {
  return (
    <section className="section">
      <h2 className="section-title">Linguagens e Tecnologias</h2>
      <div className="tech-grid">
        {techData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
