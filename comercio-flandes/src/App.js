
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Bienvenido'}/>
    </div>
  );
}

export default App;
