import './App.css';
import NavBar from './components/NavBar';

function App() {

  let userColor = "darkblue";
  const styles = { marginTop: "50px", color: userColor, textAlign: "center" };

  return (
    <div>
      <NavBar />
      <h1 className="title">Venta de Baterías Acústicas</h1>
      <p style={styles}>Desafío menú E-Commerce</p>
      <img src="/images/Drum.jpg" alt="Drum" />
      <button onClick={() => alert("Bienvenidos a Drummer E-commerce!")}>Haga click aquí</button>
    </div>
  );
}

export default App;
