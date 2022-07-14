import Logo from "../../assets/header.png";
import Vector from "../../assets/Vector.png";
import {
  Heart,
  User,
  ShoppingBag,
  MagnifyingGlass,
  List,
} from "phosphor-react";
import { useEffect, useState } from "react";
import "./styles.scss";

export default function Header() {
  const [offScroll, setOffScroll] = useState(0);

  useEffect(() => {
    const onScrool = () => setOffScroll(window.pageYOffset);

    window.removeEventListener("scroll", onScrool);
    window.addEventListener("scroll", onScrool, { passive: true });
    return () => window.removeEventListener("scroll", onScrool);
  }, []);

  offScroll > 0
    ? document.body.classList.add("scroll")
    : document.body.classList.remove("scroll");

  return (
    <header>
      <div className="header_top">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>

      <div className={"header_container"}>
        <div className="header_medium">
          <List className="menu_mobile" size={25} />

          <div className="header_logo">
            <a href="/">
              <img src={Logo} alt="logo maeztra" />
            </a>
          </div>

          <div className="header_search_input">
            <fieldset>
              <input type="search" placeholder="O Que Você Busca?" />
              <button type="button">Buscar</button>
              <MagnifyingGlass className="search_mobile" width={30} size={20} />
            </fieldset>
          </div>

          <div className="header_actions_wrapper">
            <div className="navbar_account">
              <a href="#">
                <User width={30} size={20} />
                <span>Minha conta</span>
              </a>
            </div>

            <div className="navbar_heart">
              <a href="#">
                <Heart width={30} size={20} />
                <span>Minha conta</span>
              </a>
            </div>

            <div className="navbar_shopping">
              <a href="#">
                <ShoppingBag width={30} size={20} />
                <span>Meu Carrinho</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header_top_navigation">
        <nav>
          <ul>
            <li className="navigation_news">
              <a href="#">
                <img src={Vector} alt="imagem de vestido" />
                Novidades
              </a>
            </li>

            <li>
              <a href="#">Vestidos</a>
            </li>

            <li>
              <a href="#">Roupas</a>
            </li>

            <li>
              <a href="#">Sapatos</a>
            </li>

            <li>
              <a href="#">Lingerie</a>
            </li>

            <li>
              <a href="#">Acessórios</a>
            </li>

            <li>
              <a href="#">OUTLET</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
