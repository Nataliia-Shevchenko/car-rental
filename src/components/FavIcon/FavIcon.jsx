import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const FavIcon = ({ id }) => {
  const [favs, setFavs] = useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const isFavorite = favs.includes(id);

  const handleToggleFavorite = (id) => {
    if (!isFavorite) {
      const newFavs = [...favs, id];
      setFavs(newFavs);
      localStorage.setItem("favorites", JSON.stringify(newFavs));
    } else {
      const newFavs = favs.filter((savedId) => savedId !== id);
      setFavs(newFavs);
      localStorage.setItem("favorites", JSON.stringify(newFavs));
    }
  };

  useEffect(() => {}, [favs]);

  return (
    <button
      onClick={() => handleToggleFavorite(id)}
      className="h-4.5 w-4.5 absolute top-2 right-2"
    >
      {isFavorite ? (
        <AiFillHeart className="text-accent" />
      ) : (
        <AiOutlineHeart className="text-white" />
      )}
    </button>
  );
};

export default FavIcon;

FavIcon.propTypes = {
  id: PropTypes.number.isRequired,
};
