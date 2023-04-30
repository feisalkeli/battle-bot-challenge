import BotCollection from "./components/BotCollection";

import BotList from "./components/BotList";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
createBrowserRouter([
  { path: "/", element: <NavBar /> },
  { children: [{ path: "" }] },
]);
function App() {
  return (
    <>
      <NavBar />

      <BotCollection />
      <BotList />
    </>
  );
}

export default App;
