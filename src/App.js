import Main from "./components/Main";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="font-raleway" style={{ backgroundColor: "#0b0e11", scrollSnapType: 'y mandatory' }}>
      <Main />
      <Projects  />
    </div>
  );
};

export default App;
