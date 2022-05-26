import React from "react";
import { useSelector } from "react-redux";
import Video from "../../data/Video";
import Dashboard from "../Dashboard/Dashboard";
import Player from "../Player/Player";
import ButtonRain from "../RainMode/ButtonRain";
import "./style.scss";

const Container = (props) => {
	const daynight = useSelector((state) => state.modeState);
	const rain = useSelector((state) => state.rainState);
	const { mode } = daynight;
	const { rainMode } = rain;
	const { check } = props;
	const combineMode = `${mode}-${rainMode}`;
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
						// src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4"
						// src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Interior+-+Night.mp4"
						src={Video[1].link}
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
						// src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20NIGHT.mp4"
						// src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Interior+-+Rainy+Night.mp4"
						src={Video[3].link}
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
						// src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20Day%20112521%20%281%29.mp4"
						// src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Interior+-+Sunny+Day.mp4"
						src={Video[0].link}
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
						// src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20DAY.mp4"
						// src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Interior+-+Rainy+Day.mp4"
						src={Video[2].link}
						type="video/mp4"
					/>
				</video>
			</div>
			<ButtonRain />

			<Dashboard />
			<Player />
		</>
	);
};

export default Container;
