import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocktiel" />
      <Pet name="Doink" animal="Cat" breed="Mix" /> */}
      <SearchParams />;
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
