import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRain } from "../../redux/actions";
import ReactAudioPlayer from "react-audio-player";
import "./style.scss";

const ButtonRain = () => {
	const [btnHandle, setBtnHandle] = useState(false);
	const dispatch = useDispatch();
	const rain = useSelector((state) => state.rainState);
	const { rainMode, rainValue } = rain;
	const handleRain = () => {
		if (rainValue === 0) dispatch(changeRain(rainMode, 30));
		else dispatch(changeRain(rainMode, 0));
		setBtnHandle(!btnHandle);
	};
	return (
		<>
			{btnHandle && (
				<ReactAudioPlayer
					preload="auto"
					autoPlay
					src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/rain_city.mp3"
					loop
					volume={rainValue / 100}
				/>
			)}
			<div onClick={handleRain} className="btn-rain">
				<i class="bx bx-cloud-light-rain"></i>
			</div>
		</>
	);
};

export default ButtonRain;
