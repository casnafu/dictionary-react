import Search from './Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header container">
        <nav className="navbar navbar-light bg-tranparent rounded-3">
          <div className="container-fluid">
            <a className="navbar-brand fs-1 text" href="/"><i className="fas fa-book-reader text-success"></i> Língua Dictionary</a>
          </div>
        </nav>
      </header>
      <main>
        <div className="container">
          <Search />
        </div>
      </main>
      <footer className="text-center">
        Project created by <a href="https://camif-me.netlify.app" className="text-decoration-none" target="_blank" rel="noreferrer">Camilla Ferreira</a>
      </footer>
    </div>
  );
}

export default App;
