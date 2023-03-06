import { useState, useEffect } from "react"
import GameCard from "../Game-Card/GameCard";
import {fetchData} from '../../api/api';

const Home = () => {
    const [state, setState] = useState([]);

    const fetchGames = async () => {
        const data = await fetchData('/api/products?populate=*');
        setState(data.data)
        console.log('here', data.data)
    }
    useEffect(() => {
        fetchGames()
    }, [])
    if (state.length === 0) {
        return (
            <h1 style={{ color: 'green', textAlign: 'center' }}>No products available currently.</h1>
        )
    }
    return (
        <main className="game-container">
            {state.map(({attributes:game}, index)=>{
                    return <GameCard key={index} game={game} index={index} arr={state}/>
            })}
        </main>
    )
}

export default Home;