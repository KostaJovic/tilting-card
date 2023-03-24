import logo from './logo.svg';
import './App.css';
import TiltCard from './TiltCard';

function App() {
  return (
    <div className="flex w-screen h-screen flex-wrap justify-around content-center bg-[#E5FDD1]">
      <TiltCard/>
      <TiltCard/>
      <TiltCard/>
    </div>
  );
}

export default App;
