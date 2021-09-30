import React from "react";
import "./Cart.css";

function Cart(props) {
	const { cart} = props;
	let total = 0;
	
	// calculating total price cost 
	for (const product of cart) {
        total = total + product.carCost;
    }
    
	return (
		<div>
			<h4>Order Summary</h4>

			{/* number of item selected  */}
			<h5>
				<span className="text-danger">Item Select: </span> {props.cart.length}
			</h5>
			{/* total cost  */}
			<p><span className="text-danger">Total cost :</span>{total}$</p>
			{/* cart summary where product name , picture and model will show  */}
			<div className="cart-summary">
				{cart.map((car,carId) => (
					<div key={carId}>
						<div className='d-flex'>
							<div className='py-2 px-2'>
								<img src={car.picture} width="100px" alt="summary img" />
							</div>
							<div>
								<small>
									 {car.carBrand} <br /> Model: {car.modelYear}
								</small>
								<hr />
							</div>
						</div>
					</div>
				))}
				<br />
			</div>
		</div>
	);
}

export default Cart;
