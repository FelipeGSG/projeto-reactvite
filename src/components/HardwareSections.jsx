import React from 'react';

const hardwareData = [
  {
    title: "Memória RAM",
    function: "Armazenamento temporário de dados em uso.",
    description: "A RAM é usada para armazenar dados que estão sendo utilizados pelo sistema e aplicativos em tempo real. Quanto mais RAM, melhor o desempenho em multitarefas.",
    images: [
      "https://png.pngtree.com/png-vector/20241109/ourmid/pngtree-modern-ram-stick-featuring-advanced-memory-chips-and-precise-circuit-layout-png-image_14339321.png"
    ]
  },
  {
    title: "Memória ROM",
    function: "Armazenamento permanente de dados essenciais.",
    description: "A ROM contém instruções permanentes como o firmware, responsáveis por iniciar o sistema e gerenciar o hardware básico.",
    images: [
      "https://learn.shilpa64.lk/unidata/m82/8/8/0/o_15678_1.png"
    ]
  },
  {
    title: "HD (Disco Rígido)",
    function: "Armazenar dados de forma permanente.",
    description: "O HD é um dispositivo magnético usado para guardar arquivos, programas e o sistema operacional.",
    images: [
      "https://blog.oficinadosbits.com.br/wp-content/uploads/2021/06/hdd-1024x987.png",
      "https://images.kabum.com.br/produtos/fotos/sync_mirakl/729087/xlarge/Disco-Rigido-Hd-Interno-Hitachi-320gb-2-5-Sata-Hts545032b9a300_1744309250.png",
      "https://botrecuperacaodedados.com/wp-content/uploads/2021/06/hard-159264_1280-1-1-1.png"
    ],
    extraTexts: [
      "Imagem externa de um HD tradicional.",
      "Vista interna mostrando os discos magnéticos.",
      "Placa lógica responsável pelo controle."
    ]
  },
  {
    title: "SSD",
    function: "Armazenamento rápido e sem partes móveis.",
    description: "O SSD realiza a mesma função do HD, porém é muito mais rápido e silencioso, usando memória flash.",
    images: [
      "https://br.mouser.com/images/marketingid/2023/img/168692363.png?v=070223.0417"
    ]
  },
  {
    title: "Placa-mãe",
    function: "Conectar e permitir a comunicação entre todos os componentes.",
    description: "A placa-mãe é o principal circuito do computador. Nela se conectam o processador, memória, SSD, periféricos, etc.",
    images: [
      "https://cdn.awsli.com.br/2500x2500/2539/2539199/produto/224953336/bpc-h81m-2-tg-photoroom--1--91uqaa1lj7.png"
    ]
  },
  {
    title: "Processador (CPU)",
    function: "Executar instruções e cálculos do sistema.",
    description: "O processador é considerado o cérebro do computador. Ele realiza bilhões de instruções por segundo.",
    images: [
      "https://br.mouser.com/images/marketingid/2013/img/119658698.png?v=032824.1111",
      "https://blog.oficinadosbits.com.br/wp-content/uploads/2023/12/1-2.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFnUEtp42-pS9x_lhxFWLlHl6Nb2ES6Gkdg&s"
    ],
    extraTexts: [
      "Processador moderno visto de cima.",
      "Soquete da placa-mãe onde o processador é instalado.",
      "Demonstração da instalação correta do CPU."
    ]
  },
  {
    title: "Placa de Vídeo (GPU)",
    function: "Processamento gráfico e visual.",
    description: "A GPU é responsável por renderizar imagens, vídeos e jogos. Pode ser integrada ou dedicada.",
    images: [
      "https://d1q3zw97enxzq2.cloudfront.net/images/GeForce-RTX4090-3QTR-Front-Right_.width-702.format-webp.webp"
    ]
  },
  {
    title: "Fonte de Alimentação",
    function: "Converter energia elétrica para os componentes.",
    description: "A fonte converte a energia da tomada em energia compatível para os dispositivos internos do computador.",
    images: [
      "https://png.pngtree.com/png-clipart/20250218/original/pngtree-power-supply-unit-png-image_20461069.png"
    ]
  },
  {
    title: "Gabinete",
    function: "Acondicionar e proteger os componentes.",
    description: "O gabinete é a estrutura física que abriga todos os componentes do computador, com ventilação e organização.",
    images: [
      "https://salescdn.net/u6t1CHY0P2FqX8WFdqlr2wuX_sc=/adaptive-fit-in/500x0/prod/store/13040/medias/products/gabinete-gamer-k-mex-ghost-shark-aquario-atx-vidro-temperado-b246d62a-b9d5-4b01-b504-b4b05d11eec1.webp"
    ]
  },
  {
    title: "Cooler / Ventoinha",
    function: "Resfriar componentes internos.",
    description: "O cooler é usado para dissipar o calor gerado por componentes como o processador e a placa de vídeo.",
    images: [
      "https://cdn.awsli.com.br/2500x2500/2539/2539199/produto/254280367/cl-sa90r-a2dtvjt7p5.png"
    ]
  }
];


export default function HardwareSections() {
  return (
    <div>
      {hardwareData.map((item, index) => (
        <section className="hardware-section" id={item.title.toLowerCase().replace(/\s+/g, '-')} key={index}>
          <h2>{item.title}</h2>
          <p><strong>Função principal:</strong> {item.function}</p>

          {item.images.length === 1 ? (
            <div className={`hardware-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="hardware-image">
                <img src={item.images[0]} alt={item.title} />
              </div>
              <div className="hardware-text">
                <p>{item.description}</p>
              </div>
            </div>
          ) : (
            <div className="hardware-multiple">
              {item.images.map((img, i) => (
                <div key={i}>
                  <img src={img} alt={`${item.title} ${i + 1}`} className="hardware-image" />
                  <p className="hardware-text">{item.extraTexts[i]}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
