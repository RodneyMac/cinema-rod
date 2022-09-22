import './App.css';
import Nav from './components/Nav/Nav';
import Movies from './views/Movies/Movies';

function App() {
  return (
    <div className="flex flex-col">
      <Nav/>
      <Movies/>
    </div>
  );
}

export default App;
