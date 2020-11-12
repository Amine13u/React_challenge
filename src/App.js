import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import './App.css';
import img from "./img/John-Doe.jpg";
import image from "./img/proj.png";
import Project from "./components/Project";
import Footer from "./components/Footer";

const name = "John Doe";

const info = [{text : "About", href : "#About"},
              {text : "Projects", href : "#Projects"},
              {text : "Contact", href : "#Contact"}];

const projects = ["JSX", "React", "Redux", "Node JS", "SQL", "Python", "Angular", "Spring"]; 

function App() {
  return (
    <>
      <NavBar name={name} info={info}/>
      <Intro name={name} img={img}/>
      <Project projects={projects} image={image}/>
      <Footer />
    </>
  );
}

export default App;
