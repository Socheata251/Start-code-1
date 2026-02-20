import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Daily Life Gallery</h1>
        <p>Moments that matter</p>
      </header>

      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            category={item.category}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;