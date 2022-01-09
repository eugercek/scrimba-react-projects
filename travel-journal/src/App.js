import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((d) => <Card {...d} />);
  return (
    <div className="app">
      <Header />
      <div className="cards-container">{cards}</div>
    </div>
  );
}

export default App;
