
import './Header.css'
import logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <div><img src={logo} alt="" /></div>

            <div>
                <Link to ="/">shop</Link>
                <Link to="/orders">order</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/login">login</Link>
            </div>
        </nav>
        
    );
};

export default Header;