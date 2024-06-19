import './estilo/iniciar.css'
import '../img/logo.png'

function Iniciar(props) {
  return (
    <div className="Iniciar">
      <header className="cabecalho">Xadrez</header>
      <img className="logo" src="../img/logo.png" alt="logo" />
      <button className="iniciar">Iniciar</button>
    </div>
  );
}

export default Iniciar;
