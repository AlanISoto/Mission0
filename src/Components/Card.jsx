import React from "react";

function Card(props) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl ">
      <div class="card-body">
        <h2 class="card-title">{props.name}</h2>
        <p>{props.info}</p>
      </div>
      <figure>
        <img src={props.img} alt="#" />
      </figure>
    </div>
  );
}

export default Card;
