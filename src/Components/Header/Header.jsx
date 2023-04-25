
import './Header.css'
import logo from '../../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <div><img src={logo} alt="" /></div>

            <div>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">inventory</a>
                <a href="/login">login</a>
            </div>
        </nav>
        
    );
};

export default Header;