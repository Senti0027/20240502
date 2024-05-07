import logo from './logo.svg';
import './App.css';
import MySlider from './MySlider';

function App() {
  return (
    <div className="App">
      <h1>Javascript程式設計，使用react</h1>
      <h2>5B0G0027邱品毓</h2>
      <h2>第一個元件</h2>
      <span>R: </span><MySlider/>
      <span>G: </span><MySlider/>
      <span>B: </span><MySlider/>
    </div>
  );
}

export default App;//交給index.js
