import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    AOS.init({ duration: 1000 });
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', padding: '1rem' }}>
        <button onClick={toggleLang}>{lang === 'es' ? 'EN' : 'ES'}</button>
        <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
      </div>
      <Header lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
    </div>
  );
}

export default App;
