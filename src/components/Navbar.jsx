import { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const sections = ['about', 'skills', 'experience', 'projects'];

export default function Navbar() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const updateActiveSection = () => {
      let current = 'home';
      ['home', ...sections, 'contact'].forEach(id => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 160) current = id;
      });
      setActive(current);
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);
  return <header className="site-header"><nav className="page-width nav-inner" aria-label="Main navigation"><a href="#home" className="wordmark" aria-label="Hector Ramos home">HR<span>®</span></a><div className="nav-links">{sections.map((section, index) => <a key={section} href={'#' + section} aria-current={active === section ? 'location' : undefined}><span>0{index + 1}</span>{section}</a>)}</div><a className="nav-contact micro" href="#contact">LET’S TALK <FiArrowUpRight /></a></nav></header>;
}
