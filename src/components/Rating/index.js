import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Rating } from "react-simple-star-rating";
import Star from "../../assets/images/star.png";
import { createRating } from "../../redux/actions/rating";
import "./style.scss";

const RatingComponent = () => {
	const [rating, setRating] = useState(0);
	const dispatch = useDispatch();
	const handleRating = (rate) => {
		const divRate = rate / 2 / 10;
		setRating(divRate);
	};
	const clickRating = () => {
		dispatch(createRating(rating));
	};
	return (
		<div className="background-ocean">
			<div className="card-success ">
				<div className="card-rating">
					<div className="card-rating-item-image">
						<img src={Star} alt="" />
					</div>
					<div className="card-rating-item-title">
						<h2>Mời bạn đánh giá</h2>
						<span>Chọn số sao mà bạn muốn !</span>
					</div>
					<div className="rating-handle">
						<Rating onClick={handleRating} allowHalfIcon ratingValue={rating} />
					</div>
					<div className="card-rating-item-button">
						<button onClick={clickRating} className="handle-err">
							Đánh giá
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RatingComponent;
