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

        const cars = [
          { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
          { id: 2, brand: "KIA", color: "Branco", km: 200000 },
          { id: 3, brand: "Renault", color: "Azul", km: 32000 },
        ];

        <CarDetails brand="honda" color="azul" km={1000} />
        <CarDetails brand="ford" color="preto" km={0} />
        <CarDetails brand="fiat" color="branco" km={50000} />

        {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
      </div>
    </div>
  );
}

export default App;