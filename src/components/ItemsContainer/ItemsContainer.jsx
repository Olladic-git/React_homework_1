import './ItemsContainer.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';


function ItemsContainer() {
    return (
        <section>
            <div className="container items-container">
                <h3><span>мої улюбленні</span> солодощі</h3>
                <div className="content">
                    <div className="item">
                        <img src={img1} alt="img1" />
                        <h4>Червоний мак</h4>
                        <p>Пралене з додаванням карамельної крихти, пасти ядер горіхів фундука та мигдалюпокрите
                            шоколадною глазурʼю
                        </p>
                    </div>
                    <div className="item">
                        <img src={img2} alt="img1" />
                        <h4>Сливки-ленивки</h4>
                        <p>
                            Світлі вафельні листи, поєднані молочно-вершковою начинкою та покриті глазур’ю.
                        </p>
                    </div>
                    <div className="item">
                        <img src={img3} alt="img1" />
                        <h4>Ліщина</h4>
                        <p>
                            Праліне з додаванням подрібненої та тертої ліщини та мигдалю, покрите шоколадною глазур’ю.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemsContainer;