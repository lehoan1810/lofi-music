import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { changeMood } from "../../redux/actions";

import ReactAudioPlayer from "react-audio-player";
// import { changeRain } from "../../redux/actions";
import { changeVolume } from "../../redux/actions";
import "./style.scss";

const Dashboard = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.moodState);
	const rainData = useSelector((state) => state.rainState);
	const volumeData = useSelector((state) => state.volumeState);

	const { rainValue } = rainData;
	const { moodValue } = data;
	const { volumeValue } = volumeData;

	const [openMood, setOpenMood] = useState(false);
	const [openFocus, setOpenFocus] = useState(false);
	const [cityTraffic, setCityTraffic] = useState(0);
	const openMoodHandler = () => {
		setOpenMood(!openMood);
		setOpenFocus(false);
	};

	const changeMoodHandler = (e) => {
		dispatch(changeMood(e.target.id));
	};

	const changeVolumeHandler = (e) => {
		dispatch(changeVolume(e.target.value));
	};
	return (
		<>
			{!openMood && (
				<div>
					<ReactAudioPlayer
						preload="auto"
						autoPlay
						src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/rain_city.mp3"
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
									<i id="chill" className="bx bx-coffee"></i>
									<span id="chill">Chill</span>
								</div>
							</div>
							<div className="volume">
								<Stack
									spacing={2}
									direction="row"
									sx={{ mb: 1 }}
									alignItems="center"
								>
									<i className="bx bx-volume"></i>
									<Slider
										className="volume-slider"
										value={volumeValue}
										onChange={changeVolumeHandler}
									/>
									<i className="bx bx-volume-full"></i>
								</Stack>
							</div>
							<h5>Background Noise</h5>
							<div className="backgroundNoise">
								<div className="noise-option">
									<p>City traffic</p>
									<ReactAudioPlayer
										preload="auto"
										autoPlay
										src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/city_traffic.mp3"
										loop
										volume={cityTraffic / 100}
									/>
									<Slider
										className="slider"
										value={cityTraffic}
										onChange={(e) => setCityTraffic(e.target.value)}
									/>
								</div>
							</div>
						</div>
					)}
					<div className={`icon ` + (openFocus && "active")}>
						<i
							onClick={openMoodHandler}
							className={"bx bxs-pie-chart-alt-2 " + (openFocus && "bx-tada")}
						></i>
					</div>
					<div className={`icon ` + (openFocus && "active")}>
						<i
							onClick={openMoodHandler}
							className={"bx bxs-calendar " + (openFocus && "bx-tada")}
						></i>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
