import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import './Cart.css';
import {loadStripe} from '@stripe/stripe-js'
import { makePaymentRequest } from "../../api/api";

const Cart = () => {
    const { cart, setCart } = useCart();
    const [total, setTotal] = useState();
    const [items, setItems] = useState([]);
    const url = process.env.REACT_APP_URL;
    const navigate = useNavigate();

    const calculateTotal = ()=>{
        let sum = 0 ;
        let arr = []
        cart.map(({attributes: item})=>{
            arr.push(item);
            sum += item.price
        })
        setTotal(sum);
        setItems(arr);
    }
    useState(()=>{
        calculateTotal()
    }, []);

    const handleDiscard = ()=>{
        setItems([])
        setCart([]);
        navigate('/')
    }

    const handleCheckout = async ()=>{
        try {
            const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
            const res = await makePaymentRequest('/api/orders', {
                products: cart
            })
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            }
            )
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section className="cart-container">
            <section className="cart-cards">
                {items.map((item, index) => {
                    return (
                        <div className="cart-item" key={index}>
                            <img src={url + item.image?.data.attributes.url} alt="" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <h5>₹ {item.price}</h5>
                            </div>
                        </div>
                    )
                })}
            </section>
            <section className="total">
                <h3>Total: {total}</h3>
            </section>
            <section className="cart-btns">
                <button className="btn" onClick={handleDiscard}>Discard</button>
                <button className="btn" onClick={handleCheckout}>Checkout</button>   
            </section>
        </section>
    )
}
export default Cart;