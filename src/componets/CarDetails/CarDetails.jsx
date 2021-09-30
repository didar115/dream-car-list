import React from 'react';
import '../CarDetails/CarDetails.css';

function CardDetails(props) {
    // console.log(props.DetailsInfo);
	const { carBrand, picture, madeBy, modelYear, carDetails, carCost, carColor, ratingStar } = props.DetailsInfo;



	// function to  show star rating 
	const rating = (rating) => {
		if (rating == 5) {
			return (
				<span className="ms-2">
					<i className="fas fa-star text-warning"></i>
					<i className="fas fa-star text-warning"></i>
					<i className="fas fa-star text-warning"></i>
					<i className="fas fa-star text-warning"></i>
					<i className="fas fa-star text-warning"></i>
				</span>
			);
			
		}
		else
		{
			return (
				<span className="ms-2">
					<i className="fas fa-star text-warning"></i>
					<i className="fas fa-star text-warning"></i>
					<i className="fas fa-star text-warning"></i>
					<i className="fas fa-star text-warning"></i>
					<i className="far fa-star text-warning"></i>
				</span>
			);
			}	
		}

	// end star rating 
	
	
    return (
			<div className="col-md-6 col-lg-4 d-flex justify-content-center pb-5">
				<div>
					{/* single card details section  */}
					<div className="custom-card shadow-lg rounded-3">
						<h5 className="text-center pt-3 text-danger fs-4">{carBrand}</h5>
						<img src={picture} className="img-fluid" alt="" />

						<div className="px-4 pt-4 ">
							<h6 className="fs-5">Origin : {madeBy}</h6>
							<h6>Brand : {carBrand}</h6>
							<h6>Price : ${carCost}</h6>
							<h6>Model Year : {modelYear}</h6>
							<h6>Color : {carColor}</h6>
							<h6>Car Details : {carDetails}</h6>
						<h6>Car Rating :{rating(ratingStar)}</h6>
						
							{/* Buy now button   */}
							<div className="d-flex justify-content-center py-3">
								<button
									className="btn btn-danger"
									onClick={() => props.handleAddToCart(props.DetailsInfo)}
								>
									<i className="fas fa-shopping-cart"></i> Buy Now
								</button>
							</div>
						
							{/* font awesome social icon  */}
							<div className="d-flex justify-content-center pb-4">
								<a href="/">
									<i className="fab fa-twitter-square fa-2x text-dark pe-4"></i>
								</a>
								<a href="/">
									<i className="fab fa-facebook-square fa-2x text-dark"></i>
								</a>
							</div>
							{/* icon end  */}

						</div>
					</div>
				</div>
			</div>
		);
}

export default CardDetails;
