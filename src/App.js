import './App.css';
import Background from './Components/background'
import Forground from './Components/forground'

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background />
        <Forground />
      </div>
    </>
  );
}

export default App;
