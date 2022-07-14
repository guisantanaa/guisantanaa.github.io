import fullBanner from "../assets/Fullbanner.png";
import BannerMobile from "../assets/Fullbaner-mobile.png";
import imageWorld from "../assets/icone-word.png";
import imageGarage from "../assets/icone-garage.png";
import imageExchange from "../assets/icone-exchange.png";
import imageDescount from "../assets/icone-descount.png";
import imageShipping from "../assets/icone-shipping.png";
import Comma from "../assets/comma.png";
import Melissa from "../assets/melissa.png";
import Forever from "../assets/forever.png";
import Zara from "../assets/zara.png";
import AnnTaylor from "../assets/ann-taylor.png";
import productOne from "../assets/product-one.png";
import productThow from "../assets/product-thow.png";
import newCollection from "../assets/image-collection.png";
import collectionMobile from "../assets/colection-mobile.png";
import Slider from "react-slick";
import "./styles.scss";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <section className="home_banner">
        <img src={fullBanner} alt="banner" />
        <img className="banner_mobile" src={BannerMobile} alt="banner mobile" />
      </section>

      <section className="home_carousel_maeztra">
        <div className="title_maeztra">
          <h3>Por que comprar na Maeztra?</h3>
        </div>

        <div className="informations_maeztra">
          <ul>
            <Slider {...settings}>
              <li>
                <img src={imageWorld} alt="icon world" />
                <div className="sub_information">
                  <h4>Produtos Importados</h4>
                  <span>Produtos de Alta Qualidade</span>
                </div>
              </li>

              <li>
                <img src={imageGarage} alt="icon garage" />
                <div className="sub_information">
                  <h4>Estoque no Brazil</h4>
                  <span>Produtos mais perto de você!</span>
                </div>
              </li>

              <li>
                <img src={imageExchange} alt="icon exchange" />
                <div className="sub_information">
                  <h4>Trocas Garantidas</h4>
                  <span>Trocas em até 48 horas, vejas as regras</span>
                </div>
              </li>

              <li>
                <img src={imageDescount} alt="icon descount" />
                <div className="sub_information">
                  <h4>Ganhe 5% off</h4>
                  <span>Pagando à vista no Cartão</span>
                </div>
              </li>

              <li>
                <img src={imageShipping} alt="icon shipping" />
                <div className="sub_information">
                  <h4>Frete Grátis</h4>
                  <span>Em compras acima de R$ 499,00</span>
                </div>
              </li>
            </Slider>
          </ul>
        </div>
      </section>

      <section className="home_brands">
        <div className="title_brands">
          <h1>Marcas Parceiras</h1>
        </div>

        <div className="images_brands">
          <ul>
            <Slider {...settings}>
              <li>
                <img src={Comma} alt="brand comma" />
              </li>

              <li>
                <img src={Melissa} alt="brand melissa" />
              </li>

              <li>
                <img src={Forever} alt="brand forever" />
              </li>

              <li>
                <img src={Zara} alt="brand zara" />
              </li>

              <li>
                <img src={AnnTaylor} alt="brand ann taylor" />
              </li>
            </Slider>
          </ul>
        </div>
      </section>

      <section className="home_shelv_carousel">
        <div className="title_shelv">
          <h1>As Mais Pedidas</h1>
        </div>

        <div className="shelv_products">
          <ul>
            <Slider {...settings}>
              <li>
                <div className="product_image">
                  <img src={productOne} alt="product" />
                </div>

                <div className="product_colors">
                  <div className="shelf_item_colors">
                    <label></label>
                    <label></label>
                    <label></label>
                    <label></label>
                  </div>
                </div>

                <div className="product_informations">
                  <div className="product_price">
                    <p>R$ 500,00</p>
                  </div>

                  <div className="product_title_text">
                    <span>Faux Suede Mini Skirt</span>
                    <p>
                      A faux suede mini skirt featuring exposed button-front
                      closures and panel seam construction.
                    </p>
                  </div>
                </div>

                <button type="submit">Adicionar</button>
              </li>

              <li>
                <div className="product_image">
                  <img src={productThow} alt="product" />
                </div>

                <div className="product_colors">
                  <div className="shelf_item_colors">
                    <label></label>
                    <label></label>
                    <label></label>
                    <label></label>
                  </div>
                </div>

                <div className="product_informations">
                  <div className="product_price">
                    <p>R$ 500,00</p>
                  </div>

                  <div className="product_title_text">
                    <span>Ruched Rose Print Mini Skirt</span>
                    <p>
                      A satin mini skirt featuring an allover floral print,
                      ruched side with self-tie closure, concealed back zipper,
                      and a flounce hem.
                    </p>
                  </div>
                </div>

                <button type="submit">Adicionar</button>
              </li>

              <li>
                <div className="product_image">
                  <img src={productOne} alt="product" />
                </div>

                <div className="product_colors">
                  <div className="shelf_item_colors">
                    <label></label>
                    <label></label>
                    <label></label>
                    <label></label>
                  </div>
                </div>

                <div className="product_informations">
                  <div className="product_price">
                    <p>R$ 500,00</p>
                  </div>

                  <div className="product_title_text">
                    <span>Faux Suede Mini Skirt</span>
                    <p>
                      A faux suede mini skirt featuring exposed button-front
                      closures and panel seam construction.
                    </p>
                  </div>
                </div>

                <button type="submit">Adicionar</button>
              </li>

              <li>
                <div className="product_image">
                  <img src={productThow} alt="product" />
                </div>

                <div className="product_colors">
                  <div className="shelf_item_colors">
                    <label></label>
                    <label></label>
                    <label></label>
                    <label></label>
                  </div>
                </div>

                <div className="product_informations">
                  <div className="product_price">
                    <p>R$ 500,00</p>
                  </div>

                  <div className="product_title_text">
                    <span>Ruched Rose Print Mini Skirt</span>
                    <p>
                      A satin mini skirt featuring an allover floral print,
                      ruched side with self-tie closure, concealed back zipper,
                      and a flounce hem.
                    </p>
                  </div>

                  <button type="submit">Adicionar</button>
                </div>
              </li>

              <li>
                <div className="product_image">
                  <img src={productOne} alt="product" />
                </div>

                <div className="product_colors">
                  <div className="shelf_item_colors">
                    <label></label>
                    <label></label>
                    <label></label>
                    <label></label>
                  </div>
                </div>

                <div className="product_informations">
                  <div className="product_price">
                    <p>R$ 500,00</p>
                  </div>

                  <div className="product_title_text">
                    <span>Faux Suede Mini Skirt</span>
                    <p>
                      A faux suede mini skirt featuring exposed button-front
                      closures and panel seam construction.
                    </p>
                  </div>
                </div>

                <button type="submit">Adicionar</button>
              </li>
            </Slider>
          </ul>
        </div>
      </section>

      <section className="home_new_collection">
        <div className="collection_text">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>

        <div className="colection_image">
          <img
            className="colection_desktop"
            src={newCollection}
            alt="new colection"
          />
          <img
            className="colection_mobile"
            src={collectionMobile}
            alt="colection mobile"
          />
        </div>
      </section>
    </main>
  );
}
