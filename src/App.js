import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Javascript程式設計，使用react</h1>
      <h2>第一個元件</h2>
      <span>R: </span><MySlider/>
      <span>G: </span><MySlider/>
      <span>B: </span><MySlider/>
    </div>
  );
}

export default App;
