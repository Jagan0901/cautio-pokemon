import axios from "axios";
import { useEffect,useState } from "react"
import { NavBar } from "../Components/NavBar";
import { WelcomeCard } from "../Components/WelcomeCard";
import { useNavigate } from "react-router-dom";


export const Pokemons = ({ theme, toggleTheme }) => {
  // const url = "https://pokeapi.co/api/v2/pokemon/?limit=50";

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
   const fetchPokemonData = async () => {
     try {
       // Fetch the list of Pokémon names and URLs
       const response = await axios.get(
         "https://pokeapi.co/api/v2/pokemon?limit=100"
       ); // You can change the limit as needed
       const pokemonList = response.data.results;

       // Fetch detailed data for each Pokémon
       const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
         const details = await axios.get(pokemon.url);
         return {
           name: details.data.name,
           image: details.data.sprites.front_default,
           abilities: details.data.abilities.map(
             (ability) => ability.ability.name
           ),
           types: details.data.types.map((type) => type.type.name),
         };
       });

       const pokemonDetails = await Promise.all(pokemonDetailsPromises);
       setPokemonData(pokemonDetails);
       setLoading(false);
     } catch (error) {
       console.error("Error fetching Pokémon data:", error);
       setLoading(false);
     }
   };

   fetchPokemonData();
 }, []);

 const navigate = useNavigate();

 const likedDataInLocalStorage = () => {
   const likedPokemon = JSON.parse(localStorage.getItem("liked-pokemon"));

   if (likedPokemon) navigate("/liked");
   else navigate("/game");
 };

 useEffect(() => likedDataInLocalStorage(), []);

//   setPokemons(arr);
  return loading ? (
    "LOADING..."
  ) : (
    <div className="home-container">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <WelcomeCard theme={theme} toggleTheme={toggleTheme} status={false} pokemons={pokemonData}/>
    </div>
  ); 
};
