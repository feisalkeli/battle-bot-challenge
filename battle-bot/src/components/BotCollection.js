import React, { useState, useEffect } from "react";
import BotList from "./BotList";
import "./BotCollection.css";
function BotCollection() {
  const [currentBots, setCurrentBots] = useState([]);
  console.log(currentBots);

  useEffect(() => {
    fetch("http://localhost:3006/bots")
      .then((res) => res.json())
      .then((data) => setCurrentBots(data));
  }, []);
  return (
    <>
      <div className="container col">
        {currentBots.map((bots) => {
          return (
            <BotList
              key={bots.id}
              name={bots.name}
              health={bots.health}
              damage={bots.damage}
              armor={bots.armor}
              bot_class={bots.bots_class}
              catchphrase={bots.catchphrase}
              image={bots.avatar_url}
              created={bots.created_at}
              updated={bots.updated_at}
            />
          );
        })}
      </div>
    </>
  );
}
export default BotCollection;
