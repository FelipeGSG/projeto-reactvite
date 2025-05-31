// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Projeto Tecnologias. Desenvolvido com ❤️ e IA.
        </p>
        <div style={styles.links}>
          <a href="https://github.com/FelipeGSG" target="_blank" rel="noopener noreferrer" style={styles.link}>
            GitHub Educacional
          </a>
          <a href="https://github.com/Felipe-Gabriel-Souza-Goncalves" target="_blank" rel="noopener noreferrer" style={styles.link}>
            GitHub Pessoal
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#121421', // fundo escuro
    color: '#B0B8FF', // tom claro azul-clarinho
    padding: '20px 0',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderTop: '2px solid #3B3F72', // borda azul-marinho escura
    marginTop: 'auto',
  },
  container: {
    width: '90%',
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: '14px',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#7A6FFF', // tom roxo
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
};

export default Footer;
