import Cart from './assets/cart.svg'
const CartWidget = ()=> {
    return (
        <div >
            <img src={Cart} alt='Cart'></img>
            <label>10</label>
        </div>
    );
}

export default CartWidget;