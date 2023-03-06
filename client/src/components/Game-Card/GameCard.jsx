import useCart from "../../hooks/useCart";
import './GameCard.css';

const GameCard = ({ game, index, arr }) => {
    const { cart, setCart } = useCart();
    const url = process.env.REACT_APP_URL;
    return (
        <div className="game-data">
            <section className="top-section">
                <div className="img-container">
                    <img src={url + game.image?.data.attributes.url} alt="" />

                </div>
                <div className="details">
                    <h3 className="game-name">{game.name}</h3>
                    <div className="description">
                        <h5>Description</h5>
                        <p>{game.description}</p>
                    </div>
                    <h5 className="price">₹ {game.price}</h5>
                    <button className="add-cart btn" id={index} onClick={(e) => { setCart([...cart, arr[parseInt(e.target.id)]]) }}>Add to Cart</button>
                </div>
            </section>
        </div>
    )
}

export default GameCard;