import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Stack from "@mui/material/Stack";
// import Slider from "@mui/material/Slider";
import { changeMood } from "../../redux/actions";

import ReactAudioPlayer from "react-audio-player";
// import { changeRain } from "../../redux/actions";
// import { changeVolume } from "../../redux/actions";
import "./style.scss";

const Dashboard = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.moodState);
	const rainData = useSelector((state) => state.rainState);
	// const volumeData = useSelector((state) => state.volumeState);

	const { rainValue } = rainData;
	const { moodValue } = data;
	// const { volumeValue } = volumeData;

	const [openMood, setOpenMood] = useState(false);
	const [openFocus, setOpenFocus] = useState(false);
	const openMoodHandler = () => {
		setOpenMood(!openMood);
		setOpenFocus(false);
	};

	const changeMoodHandler = (e) => {
		dispatch(changeMood(e.target.id));
	};

	// const changeVolumeHandler = (e) => {
	// 	dispatch(changeVolume(e.target.value));
	// };
	return (
		<>
			{!openMood && (
				<div>
					<ReactAudioPlayer
						preload="auto"
						autoPlay
						src="./assets/musics/rain_city.mp3"
						loop
						volume={rainValue / 100}
					/>
				</div>
			)}
			<div
				className={
					`modifier ` + (openMood && "mood ") + (openFocus && " focus ")
				}
			>
				<div className="modifier__icon">
					<div className={`icon ` + (openMood && "active")}>
						<i
							onClick={openMoodHandler}
							className={"bx bx-slider-alt " + (openMood && "bx-tada")}
						></i>
					</div>
					{openMood && (
						<div className="modifierBox">
							<h4>Mood</h4>
							<div className="options">
								<div
									id="sleep"
									onClick={changeMoodHandler}
									className={`item ` + (moodValue === "sleep" ? "active" : "")}
								>
									<i id="sleep" className="bx bx-bed"></i>
									<span id="sleep">Sleep</span>
								</div>
								<div
									id="jazzy"
									onClick={changeMoodHandler}
									className={`item ` + (moodValue === "jazzy" ? "active" : "")}
								>
									<i id="jazzy" className="bx bx-headphone"></i>
									<span id="jazzy">Jazzy</span>
								</div>
								<div
									id="chill"
									onClick={changeMoodHandler}
									className={`item ` + (moodValue === "chill" ? "active" : "")}
								>
									<i id="chill" className="bx bx-music"></i>
									<span id="chill">Chill</span>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
