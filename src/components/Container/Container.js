import React from "react";
import { useSelector } from "react-redux";
import ButtonRain from "../RainMode/ButtonRain";
import "./style.scss";

const Container = (props) => {
	const daynight = useSelector((state) => state.modeState);
	const rain = useSelector((state) => state.rainState);
	const { mode } = daynight;
	const { rainMode } = rain;
	const { check } = props;
	const combineMode = `${mode}-${rainMode}`;
	console.log("check: ", check);
	return (
		<>
			<div className="background-video video-player">
				<video
					className={combineMode === "night-clear" ? "videoIn" : "videoOut"}
					autoPlay
					loop
					muted
				>
					<source
						src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4"
						type="video/mp4"
					/>
				</video>
				<video
					className={combineMode === "night-rain" ? "videoIn" : "videoOut"}
					autoPlay
					loop
					muted
				>
					<source
						src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20NIGHT.mp4"
						type="video/mp4"
					/>
				</video>
				<video
					className={combineMode === "day-clear" ? "videoIn" : "videoOut"}
					autoPlay
					loop
					muted
				>
					<source
						src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20Day%20112521%20%281%29.mp4"
						type="video/mp4"
					/>
				</video>
				<video
					className={combineMode === "day-rain" ? "videoIn" : "videoOut"}
					autoPlay
					loop
					muted
				>
					<source
						src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20DAY.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<ButtonRain />
		</>
	);
};

export default Container;
