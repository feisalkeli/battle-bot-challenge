import { useState } from "react";
import "./Botlist.css";

function BotList({
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  image,
  created,
  updated,
  addBotHandler,
}) {
  return (
    <>
      <div>
        <div class="card col-sm-3" style={{ width: "18rem " }}>
          <p class="card-text">Bot name:{name}</p>
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">health:{health}</p>
            <p class="card-text">damage:{damage}</p>
            <p class="card-text">armor:{armor}</p>
            <p class="card-text">class:{bot_class}</p>
            <p class="card-text">created:{created}</p>
            <p class="card-text">phrase:{catchphrase}</p>
            <p class="card-text">updated:{updated}</p>
            <button onClick={() => addBotHandler(bot)}>Add Bot</button>
            {}
          </div>
        </div>
      </div>
    </>
  );
}
export default BotList;
