import '../styles/components/_header.scss';
import image from '../images/harry.jpg';

const Header = () => {
    return (
        <div className='header'>
            <img className='header__img' src={image} alt="Harry Potter"></img>
        </div>

    )
}

export default Header;