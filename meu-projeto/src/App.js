import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'caio';
  const newName = name.toUpperCase()

  function sum(a,b){
    return a + b
  }

  const url ='https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>alterando o jsx</h2>
      <p>utilizando jsx</p>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
