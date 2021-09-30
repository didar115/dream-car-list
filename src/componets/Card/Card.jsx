import React from 'react'
import CardDetails from '../CarDetails/CarDetails';
import { useEffect, useState } from "react";
import Cart from '../Cart/Cart';
import '../Card/Card.css';



// card function 
function Card() {

    const [carData, setCarData] = useState([]);
    const [cart, setCart] = useState([]);

     
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
useEffect(() => {
const url = "./carData.json";
fetch(url)
.then((res) => res.json())
.then((data) => setCarData(data));
}, []);
   
    return (
		<div className="d-flex">
			
				{/* card functionality  */}
				<div className="container">
					<div className="row">
						{carData.map((fData) => (
							<CardDetails
								key={fData._id}
								DetailsInfo={fData}
								handleAddToCart={handleAddToCart}
							></CardDetails>
						))}
					</div>
				</div>
				{/* cart section 					 */}
				<div className='cart-container'>
					<Cart  cart={cart}></Cart>
				</div>
			</div>
		);
}

export default Card;
