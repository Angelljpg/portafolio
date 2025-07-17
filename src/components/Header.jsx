import '../styles/Header.css';

const texts = {
  es: {
    title: 'Hola, soy Ángel Axel',
    subtitle: 'Desarrollador Frontend en crecimiento 🚀',
  },
  en: {
    title: "Hi, I'm Ángel Axel",
    subtitle: 'Frontend Developer in progress 🚀',
  },
};

export default function Header({ lang }) {
  return (
    <header className="header">
      <h1>{texts[lang].title}</h1>
      <p>{texts[lang].subtitle}</p>
    </header>
  );
}
