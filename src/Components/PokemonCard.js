

const PokemonCard = ({ name, image }) => {
  return (
    <div className="liked-pokemon-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;
