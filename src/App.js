import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { useTheme } from './Contexts/ThemeContext';
import { useEffect } from 'react';
import { Pokemons } from './Pages/Pokemons';
import { LikedPokemons } from './Pages/LikedPokemons';

function App() {

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme === "light" ? "light-mode" : "dark-mode";
  }, [theme]);
  return (
    // <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/game" element={<Pokemons theme={theme} toggleTheme={toggleTheme}/>} />
        <Route path="/liked" element={<LikedPokemons theme={theme} toggleTheme={toggleTheme}/>} />
        {/* <Route path="/user/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    // </ThemeProvider>
  );
}

export default App;
