import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRain } from "../../redux/actions";
import "./style.scss";

const ButtonRain = () => {
	const dispatch = useDispatch();
	const rain = useSelector((state) => state.rainState);
	const { rainMode, rainValue } = rain;
	const handleRain = () => {
		dispatch(changeRain(rainMode, 30));
	};
	return (
		<>
			<button onClick={handleRain} className="btn-rain">
				RAIN
			</button>
		</>
	);
};

export default ButtonRain;
