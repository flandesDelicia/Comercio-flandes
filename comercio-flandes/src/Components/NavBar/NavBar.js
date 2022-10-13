import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const Navbar = ()=> {
    return (
        <div expand="lg" variant="light" bg="light">
          <div>
            <button href="#">Vehiculos</button>
            <button href="#">Electronica</button>
            <button href="#">Libros</button>
          </div>
          <CartWidget/>
        </div>
    );
}

export default Navbar;