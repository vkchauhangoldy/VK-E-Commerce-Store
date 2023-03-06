import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import './Navbar.css'

const Navbar = ()=>{
    const {cart} = useCart()
    console.log(cart);
    return(
        <header className='header'>
            <div className="link-container">
                <h1>Gamer's Arena</h1>
                <nav className='navbar'>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li>About</li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </div>
            <div className="cart-display">
                <Link to={'/cart'}><span className="cart-icon"></span></Link>
                <span className="cart-count">{cart.length}</span>
            </div>
        </header>
    )
}

export default Navbar;