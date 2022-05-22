import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch, useSelector } from "react-redux";
import { setLocal } from "../../LocalStorage/getLocal";
import { changeMood, changeRain, changeVolume } from "../../redux/actions";
import Message from "../Message";
import ModalCreateName from "../../common/ModalCreateName/index";
import "./style.scss";

var stompClient = null;
const Dashboard = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.moodState);
	const rainData = useSelector((state) => state.rainState);
	const volumeData = useSelector((state) => state.volumeState);

	const { rainValue, rainMode } = rainData;
	console.log("show rainData dashboard: ", rainData);

	const { moodValue } = data;
	const { volumeValue } = volumeData;

	const [openMood, setOpenMood] = useState(false);
	const [openChat, setOpenChat] = useState(false);
	const [openFocus, setOpenFocus] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const [cityTraffic, setCityTraffic] = useState(0);
	const [River, setRiver] = useState(0);
	const [Rain, setRain] = useState(0);
	const [Ocean, setOcean] = useState(0);
	const [Bird, setBird] = useState(0);
	const [Snow, setSnow] = useState(0);

	const [listMessage, setListMessage] = useState([]);

	const BASE_URL = process.env.REACT_APP_LOFI_URL;
	const getSessonName = setLocal("name");
	console.log(getSessonName);

	const url = `${BASE_URL}/rest/message/CHANNEL_1`;
	useEffect(() => {
		const getList = async () => {
			try {
				const res = await axios.get(url);
				console.log("data: ", res.data);
				setListMessage(res.data);
			} catch (error) {
				console.error(error);
			}
		};
		getList();
	}, []);

	const openMoodHandler = () => {
		setOpenMood(!openMood);
		setOpenFocus(false);
		setOpenChat(false);
	};

	const openChatHandler = () => {
		setOpenChat(!openChat);
		setOpenFocus(false);
		setOpenMood(false);
	};

	const changeMoodHandler = (e) => {
		dispatch(changeMood(e.target.id));
	};

	const changeVolumeHandler = (e) => {
		dispatch(changeVolume(e.target.value));
	};

	const rainHandle = (e) => {
		setRain(e.target.value);
		if (e.target.value === 0) {
			dispatch(changeRain("rain", 0));
		} else {
			dispatch(changeRain("clear", e.target.value));
		}

		// if (e.target.value > 0) dispatch(changeRainStatus("clear", cityRain));
		// // if value = 0 then stop rain
		// else if (e.target.value === 0) dispatch(changeRainStatus("rain", 0));
		// setCityRain(e.target.value);
	};
	const showHanleModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<>
			{openModal && (
				<ModalCreateName openModal={openModal} setOpenModal={setOpenModal} />
			)}
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
								<div className="noise-option">
									<p>City Rain</p>
									<ReactAudioPlayer
										preload="auto"
										autoPlay
										src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/rain_city.mp3"
										loop
										volume={rainValue / 100}
										// volume={rainValue !== 0 ? rainValue / 100 : Rain / 100}
									/>
									<Slider
										className="slider"
										// value={Rain}
										value={rainValue}
										onChange={(e) => rainHandle(e)}
									/>
								</div>
								<div className="noise-option">
									<p>Ocean</p>
									<ReactAudioPlayer
										preload="auto"
										autoPlay
										src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/ocean.mp3"
										loop
										volume={Ocean / 100}
									/>
									<Slider
										className="slider"
										value={Ocean}
										onChange={(e) => setOcean(e.target.value)}
									/>
								</div>
								<div className="noise-option">
									<p>Snow</p>
									<ReactAudioPlayer
										preload="auto"
										autoPlay
										src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/snow.mp3"
										loop
										volume={Snow / 100}
									/>
									<Slider
										className="slider"
										value={Snow}
										onChange={(e) => setSnow(e.target.value)}
									/>
								</div>
								<div className="noise-option">
									<p>River</p>
									<ReactAudioPlayer
										preload="auto"
										autoPlay
										src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/river.mp3"
										loop
										volume={River / 100}
									/>
									<Slider
										className="slider"
										value={River}
										onChange={(e) => setRiver(e.target.value)}
									/>
								</div>
								<div className="noise-option">
									<p>Bird</p>
									<ReactAudioPlayer
										preload="auto"
										autoPlay
										src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/birds.mp3"
										loop
										volume={Bird / 100}
									/>
									<Slider
										className="slider"
										value={Bird}
										onChange={(e) => setBird(e.target.value)}
									/>
								</div>
							</div>
						</div>
					)}
					<div className={`icon ` + (openChat && "active")}>
						<i
							onClick={getSessonName ? openChatHandler : showHanleModal}
							className={
								"bx bx-message-rounded-dots " + (openChat && "bx-tada")
							}
						></i>
					</div>

					{/* {getSessonName ? (
						<div>
							{openChat && (
								<Message
									listMessage={listMessage}
									openChatHandler={openChatHandler}
								/>
							)}
							<div className={`icon ` + (openFocus && "active")}>
								<i
									onClick={openMoodHandler}
									className={"bx bxs-calendar " + (openFocus && "bx-tada")}
								></i>
							</div>
						</div>
					) : (
						<ModalCreateName />
					)} */}
					<div>
						{openChat && (
							<Message
								listMessage={listMessage}
								openChatHandler={openChatHandler}
							/>
						)}
						<div className={`icon ` + (openFocus && "active")}>
							<i
								onClick={openChatHandler}
								className={"bx bxs-calendar " + (openFocus && "bx-tada")}
							></i>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
