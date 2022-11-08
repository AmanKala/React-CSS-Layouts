import { Link } from 'react-router-dom';
import '../Styles/ModernCard.css';
import Logo from './Logo';
import Profile from './Profile';

const Navbar = () =>{
    return(
        <>
            <Logo/>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/cards'>Cards</Link>
            <Profile/>
        </>
    )
}

export default Navbar;
