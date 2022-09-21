import './App.css';
import Nav from './components/Nav/Nav';
import Movies from './views/Movies/Movies';

function App() {
  return (
    <div className="App w-full flex flex-col justify-center">
      <Nav/>
      <Movies/>
    </div>
  );
}

export default App;
