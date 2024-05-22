import { useNavigate } from "react-router-dom";
import { NavBar } from "../Components/NavBar"
import { WelcomeCard } from "../Components/WelcomeCard"
import { useEffect } from "react";

export const Home = ({theme, toggleTheme}) => {
  const navigate = useNavigate();

  const likedDataInLocalStorage = () => {
    const likedPokemon = JSON.parse(localStorage.getItem("liked-pokemon"));

    if (likedPokemon) navigate("/liked");
    else navigate("/");
  };

  useEffect(() => likedDataInLocalStorage(), []);
  return (
    <div className="home-container">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <WelcomeCard theme={theme} toggleTheme={toggleTheme} status={true}/>
    </div>
  );
}
