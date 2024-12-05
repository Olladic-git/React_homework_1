import './Footer.css';
import logo_yummy from '../../assets/Logo_Yummy.svg';

function Footer() {
    return (
        <>
            <footer>
                <div className="container footer-container">
                    <a href="/" className="logo">
                        <img src={logo_yummy} alt="logo" />
                    </a>
                    <h2>Приєднуйся і живи зі мною у світі солодощів!</h2>
                </div>
            </footer>
        </>
    )
}

export default Footer;