import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { AppContext } from "../../context/context";

const SavedSingleRecipe = ({ item, id }) => {
  const { localStrPath, newLocalStrPath } = React.useContext(AppContext);

  const {
    recipe: { image, label, source },
  } = item;

  const checkLength = (label) => {
    const words = label.split(" ");
    return `${words.slice(0, 3).join(" ")}...`;
  };

  return (
    <article className="single-recipe" onMouseDown={() => newLocalStrPath(id)}>
      <img src={image} alt={label} />
      <div className="single-rec-info">
        <div>
          <h4>{label.length > 35 ? checkLength(label) : label}</h4>
          <p>from {source}</p>
        </div>
        <Link to={`/savedrecipes/${localStrPath}`}>
          <FiExternalLink className="single-rec-link-img" />
        </Link>
      </div>
    </article>
  );
};

export default SavedSingleRecipe;
