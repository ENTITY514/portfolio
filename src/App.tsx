import style from './app.module.css';
import { AboutMe } from './Components/AboutMe/about_me';
import { Projects } from './Components/Projects/projects';
import { Skills } from './Components/Skills/skills';
import { Title } from './Components/Title/title';

function App() {
  return (
    <div className={style.app}>
      <div className={style.box}>
        <Title />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
