import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { AppContext } from "../context/context";

const SingleRecipe = ({ item, id }) => {
  const { setPath, path, queryPath } = React.useContext(AppContext);

  const {
    recipe: { image, label, source },
  } = item;

  const checkLength = (label) => {
    const words = label.split(" ");
    return `${words.slice(0, 3).join(" ")}...`;
  };

  const handleMouseDown = () => {
    setPath(id);
    localStorage.setItem("path", JSON.stringify(id));
  };

  return (
    <article className="single-recipe" onMouseDown={handleMouseDown}>
      <img src={image} alt={label} />

      <div className="single-rec-info">
        <div>
          <h4>{label.length > 35 ? checkLength(label) : label}</h4>
          <p>from {source}</p>
        </div>
        <Link to={`/recipes/${queryPath}/${path}`}>
          <FiExternalLink className="single-rec-link-img" />
        </Link>
      </div>
    </article>
  );
};

export default SingleRecipe;
