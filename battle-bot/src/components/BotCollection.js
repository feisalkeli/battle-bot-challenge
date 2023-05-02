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
  const handleDelete = function (id) {
    const deleteBots = currentBots.find((bot) => bot.id === id);
    fetch("http://localhost:3006/bots", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
        .then((res) => res.json)
        .then(setCurrentBots(deleteBots)),
    });
  };
  const handleAddBots = function (bot) {
    if (currentBots.find((bot) => bot.id === bot.id)) {
      return;
    }
    window.alert("Bot is already on list");
    setCurrentBots((currentBots) => [...currentBots, bot]);
  };
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
              addBotHandler={handleAddBots}
            />
          );
        })}
      </div>
    </>
  );
}
export default BotCollection;
