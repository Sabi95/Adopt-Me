import ReactDOM from 'react-dom';
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name = "Honey" animal = "Dog" breed = "Golden Retriever" />
    <Pet name = "Oden" animal = "Sugarglider" breed = "Savanna Glider" />
    <Pet name = "Candy" animal = "Cat" breed = "Mixed" />
  </div>
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
