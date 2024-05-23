import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { EffectCards } from "swiper";
import { useRef, useState } from "react";



export const WelcomeCard = ({ theme, toggleTheme, status,pokemons }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("")

  const swiperRef = useRef(null);
  var likedPokemon = [];

  const handleDisLikeClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleEndButton = ()=>{
    console.log(likedPokemon);
   if(likedPokemon.length>0) {
    localStorage.setItem("liked-pokemon", JSON.stringify(likedPokemon))
    setMessage("");
    navigate("/liked")
  
  }
   else setMessage("You've to like atleast one pokemon")
  }

  const likeButton = {
    border: theme === "light" ? "2px solid black" : "2px solid white",
    color: theme === "light" ? "black" : "white",
    backgroundColor: "lightgreen"
  };

  const disLikeButton = {
    border: theme === "light" ? "2px solid black" : "2px solid white",
    color: theme === "light" ? "black" : "white",
    backgroundColor: "pink",
  };

  const endButton = {
    border: theme === "light" ? "2px solid black" : "2px solid white",
    color: theme === "light" ? "black" : "white",
    backgroundColor: "red"
  };

  // console.log(likedPokemon)

  return status === true ? (
    <div
      className="card"
      style={{
        border: theme === "light" ? "2px solid black" : "2px solid white",
      }}
    >
      <div style={{ marginTop: "20%" }}>
        <h1>How to play PokSwipe</h1>
        <br />
        <p>Pokemon appear one at a time</p>
        <p>Choose 'Like' or 'Dislike'</p>
        <p>Build your favorite team</p>
        <button
          onClick={() => navigate("/game")}
          style={{
            fontWeight: "bold",
            backgroundColor: "green",
            width: "50%",
            height: "50px",
            color: theme === "light" ? "black" : "white",
            cursor: "pointer",
          }}
        >
          Start
        </button>
      </div>
    </div>
  ) : (
    <>
      <div
        className="pokemon-card"
        style={{
          border: theme === "light" ? "2px solid black" : "2px solid white",
        }}
      >
        <div>
          <Swiper effect={"cards"} grabCursor={true} ref={swiperRef}>
            {pokemons?.map((pokemon) => (
              <SwiperSlide>
                <div>
                  <img
                    src={pokemon.image}
                    alt={pokemon.image}
                    style={{ height: "200px" }}
                  />
                  <h3 style={{ fontSize: "30px" }}>
                    {pokemon.name.toUpperCase()}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      padding: "2%",
                    }}
                  >
                    {pokemon.abilities.map((ability) => (
                      <p
                        className="pokemon-ability"
                        style={{
                          border:
                            theme === "light"
                              ? "2px solid black"
                              : "2px solid white",
                        }}
                      >
                        {ability.toUpperCase()}
                      </p>
                    ))}
                    {pokemon.types.map((type) => (
                      <p
                        className="pokemon-type"
                        style={{
                          border:
                            theme === "light"
                              ? "2px solid black"
                              : "2px solid white",
                        }}
                      >
                        {type.toUpperCase()}
                      </p>
                    ))}
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <button
                      style={disLikeButton}
                      onClick={handleDisLikeClick}
                      className="like-button"
                    >
                      Dislike
                    </button>
                    <button
                      style={likeButton}
                      onClick={() => {
                        if (swiperRef.current && swiperRef.current.swiper) {
                          swiperRef.current.swiper.slideNext();
                          likedPokemon.push(pokemon);
                        }
                      }}
                      className="like-button"
                    >
                      Like
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </div>
      </div>
     <button style={endButton} className="like-button" onClick={handleEndButton}>End Game</button>
     <p style={{color:"red", fontWeight:"bold"}}>{message}</p>
    </>
  );
};
