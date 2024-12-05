import './Header.css';
import logo from '../../assets/Logo_Yummy.svg';

function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <a href="/" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="menu">
                        <a href="#">Порада від Ямі</a>
                        <a href="#">Мої улюбленній солодощі</a>
                    </div>
                </nav>
            </div>
            <div className="container header-container">
                <div className="greetings">
                    <h1><span>Yummy</span><br />
                        Pug
                    </h1>
                    <p>
                        Всім привіт, я Ямі і я мопс, який дуже сильно полюбляє солодощі. Сьогодні я розкажу вам, чому саме
                        солодощі і чому вони так важливі в нашому житті.Доречі, моє імʼя з англійської мови перекладається
                        як “Смачний”.
                    </p>
                    <a href="#"> Мої улюбленні солодощі</a>
                </div>
            </div>
        </header>
    )
}

export default Header;