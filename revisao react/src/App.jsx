import "./App.css";
import ManageData from "./components/ManageData.jsx";

import city from "./assets/city.jpg";

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>

      <div>
        {/* Imagem localizada na pasta public */}
        <img src="/img1.jpg" alt="Paisagem" />

        {/* Imagem importada de src/assets */}
        <img src={city} alt="Cidade" />
        <ManageData />
      </div>
    </div>
  );
}

export default App;