import logo from './logo.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {

  const nome = "Luiza"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <SayMyName nome="Caio" />
      <SayMyName nome={nome} />
      <Pessoa nome="Caio" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <Frase />
    </div>
  );
}

export default App
