import { useState } from 'react';

export default function Carousel() {
	const [activeImage, setActiveImage] = useState(1);

	const IMAGE_1_URL =
		'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const IMAGE_2_URL =
		'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const IMAGE_3_URL =
		'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

	return (
		<>
			<div className="carousel">
				<ul className="carousel__slides">
					<input type="radio" name="radio-buttons" id="img-1" checked={activeImage === 1} readOnly />
					<li className="carousel__slide-container">
						<div className="carousel__slide-img">
							<img alt="scenery 1" src={IMAGE_1_URL} />
						</div>
						<div className="carousel__controls">
							<label onClick={() => setActiveImage(3)} className="carousel__slide-prev">
								<span>&lsaquo;</span>
							</label>
							<label onClick={() => setActiveImage(2)} className="carousel__slide-next">
								<span>&rsaquo;</span>
							</label>
						</div>
					</li>
					<input type="radio" name="radio-buttons" id="img-2" checked={activeImage === 2} readOnly />
					<li className="carousel__slide-container">
						<div className="carousel__slide-img">
							<img alt="scenery 1" src={IMAGE_2_URL} />
						</div>
						<div className="carousel__controls">
							<label onClick={() => setActiveImage(1)} className="carousel__slide-prev">
								<span>&lsaquo;</span>
							</label>
							<label onClick={() => setActiveImage(3)} className="carousel__slide-next">
								<span>&rsaquo;</span>
							</label>
						</div>
					</li>
					<input type="radio" name="radio-buttons" id="img-3" checked={activeImage === 3} readOnly />
					<li className="carousel__slide-container">
						<div className="carousel__slide-img">
							<img alt="scenery 1" src={IMAGE_3_URL} />
						</div>
						<div className="carousel__controls">
							<label onClick={() => setActiveImage(2)} className="carousel__slide-prev">
								<span>&lsaquo;</span>
							</label>
							<label onClick={() => setActiveImage(1)} className="carousel__slide-next">
								<span>&rsaquo;</span>
							</label>
						</div>
					</li>
					<div className="carousel__dots">
						<label onClick={() => setActiveImage(1)} className="carousel__dot" id="img-dot-1" />
						<label onClick={() => setActiveImage(2)} className="carousel__dot" id="img-dot-2" />
						<label onClick={() => setActiveImage(3)} className="carousel__dot" id="img-dot-3" />
					</div>
				</ul>
			</div>
		</>
	);
}
