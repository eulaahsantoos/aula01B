
import {useState} from "react"
import { FiSearch } from "react-icons/fi";
import './styles.css';

function App() {

    const [input, setInputo] = useState('')

    function aoClicar(){
      alert('O que tem dento do Input' + input)
    }
    
  
  return (
    <div className="container">
      <h1 className="title"> Buscador de Cep</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." value={input} onChange={(e) =>setInputo(e.target.value)}/>

       
        <button className="buttonSearch" onClick={aoClicar}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className="main">
        <h2>Cep:98657898267</h2>
        <span>Rua:Katheriane</span>
        <span>Bairro:Katheriane</span>
        <span>Estado:Katheriane</span>

        </main>

    </div>
  );
}

export default App;

