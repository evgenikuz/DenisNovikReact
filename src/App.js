import './App.css';
import AboutMe from './components/About-me/About-me';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts/>
      <MobileMenu/>
    </div>
  );
}

export default App;
