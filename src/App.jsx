import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imgUrls = [
  "src/assets/img/shoes1.png",
  "src//assets/img/shoes2.png",
  "src//assets/img/shoes3.png",
  "src//assets/img/shoes4.png",
];

function App() {
  const [count, setCount] = useState(0);
  const [selectedImg, setSelectedImg] = useState("src/assets/img/shoes1.png");
  const [product, setProduct] = useState({});
  function addToCard() {
    const productToBasket = {
      count: count,
      img: selectedImg,
      price: 125,
    };
    setProduct(productToBasket);
  }
  return (
    <>
      <HeadButtons product={product} />
      <div className="row-box">
        <ImgContainer selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        <RightContainer productCount={count} setCount={setCount} addToCard={addToCard} />
      </div>
    </>
  );
}

function Basket({ product }) {
  const [modal, setModal] = useState(false);

  function handleClickBasket() {
    setModal(!modal);
  }

  function handleRemove() {}

  function handleCheckout() {}

  return (
    <>
      <div>
        <button onClick={handleClickBasket} className="basket">
          {product.count ? (
            <p className="count-that-in-basket">
              <strong>{product.count}</strong>
            </p>
          ) : (
            ""
          )}
        </button>
        {modal && (
          <dialog className="dialog" open={modal}>
            <div className="cart-container">
              <h3 style={{ borderBottom: "1px solid #E4E9F2", paddingBottom: "12px" }}>Cart</h3>
              {product.count > 0 ? (
                <div className="cart-item">
                  <img className="cart-img" src={product.img} alt="Product" />
                  <div>
                    <p className="cart-p">Fall Limited Edition Sneakers</p>
                    <p className="cart-p">
                      ${product.price} x {product.count}{" "}
                      <span style={{ color: "black" }}>
                        <strong>${product.price * product.count}</strong>{" "}
                      </span>
                    </p>
                  </div>
                  <button className="cop-btn" onClick={handleRemove}>
                    <img src="src/assets/img/cop.svg" alt="" />
                  </button>
                </div>
              ) : (
                <p className="cart-p">
                  <strong>Your cart is empty.</strong>{" "}
                </p>
              )}
              {product.count > 0 && (
                <button className="checkout-btn" onClick={handleCheckout}>
                  Check Out
                </button>
              )}
            </div>
          </dialog>
        )}
      </div>
    </>
  );
}

function Profile() {
  return <button className="profile"></button>;
}

function HeadButtons({ product }) {
  return (
    <>
      <div className="profile-container">
        <Basket product={product} />
        <Profile />
      </div>
      <div className="header-title">sneakers</div>
      <div className="links">
        <ul className="header-links">
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

function ImgContainer({ selectedImg, setSelectedImg }) {
  return (
    <>
      <div className="product-container">
        <div>
          <img className="selected-img" width={445} src={selectedImg} alt="" />
        </div>
        <div className="images-container">
          {imgUrls.map((img, index) => (
            <img
              className={img === selectedImg ? "active-img small-images" : "small-images"}
              key={index}
              src={img}
              onClick={() => setSelectedImg(img)}
            ></img>
          ))}
        </div>
      </div>
    </>
  );
}

function RightContainer({ productCount, setCount, addToCard }) {
  return (
    <>
      <div className="right-container">
        <h4 className="rc-header">SNEAKER COMPANY</h4>
        <h1 className="rc-title">Fall Limited Edition Sneakers</h1>
        <p className="rc-content">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll
          withstand everything the weather can offer.
        </p>
        <div className="prices-box">
          <div className="row-prices">
            <p className="current-price">$125.00</p>
            <p className="discount">50%</p>
          </div>
          <p className="prev-price">$250.00</p>
        </div>
        <CountButton count={productCount} setCount={setCount} addToCard={addToCard} />
      </div>
    </>
  );
}

function CountButton({ count, setCount, addToCard }) {
  function addCount() {
    setCount(count + 1);
  }

  function minusCount() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }
  return (
    <div className="actions">
      <div className="product-number">
        <button className="btns" onClick={minusCount}>
          -
        </button>
        <p className="count">{count}</p>
        <button className="btns" onClick={addCount}>
          +
        </button>
      </div>
      <div>
        <button onClick={addToCard} className="shopping-button">
          <img src="src/assets/img/Shape.svg" alt="shopping car" />
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
}

export default App;
