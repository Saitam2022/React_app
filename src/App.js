import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card/Card';
import ItemListContainer from './components/ItemListContainer';

function App() {

  let userColor = "darkblue";
  const styles = { marginTop: "50px", color: userColor, textAlign: "center" };

  const dataProducts = [
    {
      Name: 'Bateria SONOR SQ2 5 cuerpos',
      Price: 650000,
      img: "/images/Drum.jpg",
      description: "Sonor SQ2 5 cuerpos Maple - Origen Alemania"
    },
    {
      Name: 'Bateria Yamaha Oak 4 cuerpos',
      Price: 550000,
      img: "/images/Drum.jpg",
      description: "Yamaha Oak 4 cuerpos - Origen Japón"
    },
    {
      Name: 'Bateria Pearl Master Custom Series 5 cuerpos',
      Price: 615000,
      img: "/images/Drum.jpg",
      description: "Pearl Master Custom Series 5 cuerpos Maple - Origen Japón"
    },
  ];

  return (
    <div>
      <NavBar />
      <h1 className="title">Venta de Baterías Acústicas</h1>
      <p style={styles}>Desafío CartWidget</p>
      <img src="/images/Drum.jpg" alt="Drum" />
      <button onClick={() => alert("Bienvenidos a Drummer E-commerce!")}>Haga click aquí</button>

      <Card data={dataProducts[0]} />
      <Card data={dataProducts[1]} />
      <Card data={dataProducts[2]} />
      <ItemListContainer/>
      <h3 className="ItemList">Lista Contenedora de los items</h3>
    </div>
  );
}

export default App;
