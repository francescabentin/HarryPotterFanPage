import '../styles/components/_header.scss';
import image from '../images/backgroundHeader.jpg';

const Header = () => {
    return (
        <div className='header'>
            <img src={image} alt="Harry Potter"></img>
        </div>

    )
}

export default Header;