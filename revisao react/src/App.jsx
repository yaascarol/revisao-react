import "./App.css";
import ManageData from "./components/ManageData.jsx";
import ListRender from "./components/ListRender.jsx";
import ConditionalRender from "./components/ConditionalRender.jsx";
import ShowUserName from "./components/ShowUserName.jsx";
import CarDetails from "./components/CarDetails.jsx"

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
        <ListRender />
        <ConditionalRender />
        <ShowUserName name ="yasmin" />
        <CarDetails brand="honda" color="azul" km={1000} />
        <CarDetails brand="ford" color="preto" km={0} />
        <CarDetails brand="fiat" color="branco" km={50000} />
      </div>
    </div>
  );
}

export default App;