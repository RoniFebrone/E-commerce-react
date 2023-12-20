import "./index.scss";
import logo from "../../assets/logo-dnc.png";
import cartLogo from "../../assets/cartshop.png";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
    return (
        <header className="header-menu" >
            <img src={logo} alt="logo" className="header-menu__logo" />
            <ul>
                <Link to={"/home"} > <li>Home</li> </Link>
                <li>Novidades</li>
                <li>Feminino</li>
                <li>Masculino</li>
                <li>Atendimento</li>
            </ul>

            <div className="header-menu__cart-shop" >
                <h1>
                    Meu Carrinho
                </h1>
                <img src={cartLogo} alt="cartLogo" />
            </div>
        </header>
    );
}

    ;

export default HeaderMenu;