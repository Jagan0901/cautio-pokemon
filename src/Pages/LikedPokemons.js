import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
import PokemonCard from "../Components/PokemonCard";

export const LikedPokemons = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const [pokemons,setPokemons] = useState([]);

  const likedDataInLocalStorage = () => {
    const likedPokemon = JSON.parse(localStorage.getItem("liked-pokemon"));
    setPokemons(likedPokemon);

    if (likedPokemon) navigate("/liked");
    else navigate("/game");
  };

  const playAgain = ()=>{
    localStorage.removeItem("liked-pokemon");
    navigate("/");
  };

  const likeButton = {
    border: theme === "light" ? "2px solid black" : "2px solid white",
    color: theme === "light" ? "black" : "white",
    backgroundColor: "lightgreen",
  };

  useEffect(() => likedDataInLocalStorage(), []);
  return (
    <div className="home-container">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <div>
        <div className="pokemon-list">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} name={pokemon.name} image={pokemon.image} />
      ))}
    </div>
      </div>
      <br/>
      <button style={likeButton} className="like-button" onClick={playAgain}>Play Again</button>
    </div>
  );
};
