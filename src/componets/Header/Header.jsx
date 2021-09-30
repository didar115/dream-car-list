import React from 'react';
 function Header() {
    return (
			<div className="text-center">
			<div>
					{/* logo section  */}
					<img src="./image/dream-car-logo.png" height="200px" alt="" />
					<div className="bg-warning">
						<h1 className="display-4">Dream Car list</h1>
						<h4 className="pb-3">All Popular Brand</h4>
					</div>
				</div>
			</div>
		);
}

export default Header;


