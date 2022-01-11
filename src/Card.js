import React from "react";
import PropTypes from "prop-types";

const Card = ({ character }) => {
  return (
    <div className="card w-25 mb-3">
      <img src={character.image} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title mb-0">{character.name}</h5>
        <p className="card-text">
          {character.status}- {character.species}
        </p>
        <h6 className="card-subtitle text-muted">Last known location</h6>
        <p className="card-text">{character.location.name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  character: PropTypes.object,
};

export default Card;
