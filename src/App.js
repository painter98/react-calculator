import logo from './logo.svg';
import './App.css';
import contest1 from './assets/contest 1.jpg';
import tableComponent from './components/table.js';
import listComponent from './components/list.js';
import headingComponent from './components/header.js';

function App() {
  return (
    <div>
      <headingComponent image={contest1}/>
      <listComponent />
      <tableComponent />
    </div>
  );
}

export default App;
