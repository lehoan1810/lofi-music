import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Container = (props) => {
	const daynight = useSelector((state) => state.modeState);
	const { mode } = daynight;
	const { check } = props;
	const combineMode = `${mode}`;
	console.log("check: ", check);
	return (
		<>
			<div className="background-video video-player">
				<video
					className={combineMode === "night" ? "videoIn" : "videoOut"}
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
					className={combineMode === "day" ? "videoIn" : "videoOut"}
					autoPlay
					loop
					muted
				>
					<source
						src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20Day%20112521%20%281%29.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		</>
	);
};

export default Container;
