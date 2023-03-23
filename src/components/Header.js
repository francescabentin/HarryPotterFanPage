import '../styles/components/_header.scss';
import logo from "../images/logo.png" 


const Header = () => {
    return (
        <div className='header'>
            <img className='header__img' src={logo} alt="" />
        </div>

    )
}

export default Header;