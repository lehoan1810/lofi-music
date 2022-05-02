import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { changeMood, changeRain } from "../../redux/actions";
import ReactAudioPlayer from "react-audio-player";
// import { changeRain } from "../../redux/actions";
import { changeVolume } from "../../redux/actions";
import "./style.scss";

const Dashboard = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.moodState);
	const rainData = useSelector((state) => state.rainState);
	const volumeData = useSelector((state) => state.volumeState);

	const { rainValue, rainMode } = rainData;
	const { moodValue } = data;
	const { volumeValue } = volumeData;

	const [openMood, setOpenMood] = useState(false);
	const [openChat, setOpenChat] = useState(false);
	const [openFocus, setOpenFocus] = useState(false);
	const [cityTraffic, setCityTraffic] = useState(0);
	const [River, setRiver] = useState(0);
	const [Rain, setRain] = useState(0);
	const [Ocean, setOcean] = useState(0);
	const [Bird, setBird] = useState(0);
	const [Snow, setSnow] = useState(0);

	const openMoodHandler = () => {
		setOpenMood(!openMood);
		setOpenFocus(false);
	};

	const openChatHandler = () => {
		setOpenChat(!openChat);
		setOpenFocus(false);
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
								<div className="noise-option">
									<p>City Rain</p>
									<ReactAudioPlayer
										preload="auto"
										autoPlay
										src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/rain_city.mp3"
										loop
										volume={Rain / 100}
									/>
									<Slider
										className="slider"
										value={Rain}
										// onChange={(e) => setRain(e.target.value)}
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
							onClick={openChatHandler}
							className={
								"bx bx-message-rounded-dots " + (openChat && "bx-tada")
							}
						></i>
					</div>
					{openChat && (
						<div className="form-message">
							<div className="message-header">
								<div className="message-avatar">
									<div className="avatar-border avatar-status">
										<span className="_status"></span>
										<img
											className="image-cover avatar-image"
											src="https://i.pinimg.com/736x/aa/a3/94/aaa39465e439b4bf4f7e20ecad105856.jpg"
											alt=""
										/>
									</div>

									<span>Ciin</span>
								</div>

								<div className="message-menu">
									<div className="menu-item">
										<img
											src="https://cdn-icons.flaticon.com/png/512/3059/premium/3059446.png?token=exp=1651434341~hmac=59d5efb1e8cff4f769ded2c891e30555"
											alt=""
										/>
									</div>
									<div className="menu-item">
										<img
											src="https://cdn-icons-png.flaticon.com/512/1160/1160041.png"
											alt=""
										/>
									</div>
									<div onClick={openChatHandler} className="menu-item">
										<img
											src="https://cdn-icons.flaticon.com/png/512/5368/premium/5368396.png?token=exp=1651434318~hmac=519fa0138c9ccaaffe5b1f549abac0ca"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="message-content">
								<div className="guest">
									<div className="message-guest">
										<img
											className="message-guest-image"
											src="https://i.pinimg.com/736x/aa/a3/94/aaa39465e439b4bf4f7e20ecad105856.jpg"
											alt=""
										/>
										<span className="guest-content">
											Xin chào mình là Ciin laf toi dday nef ban oiw oiwf oiw,
											mai banj cos di hocj ko bal bla bla bloa bla dfg reg rg rg
											rg
										</span>
									</div>
									<div className="message-guest">
										<img
											className="message-guest-image"
											src="https://i.pinimg.com/736x/aa/a3/94/aaa39465e439b4bf4f7e20ecad105856.jpg"
											alt=""
										/>
										<span className="guest-content">Xin chào mình là Ciin</span>
									</div>
								</div>
								<div className="my">
									<div className="message-my">
										<span className="my-content">
											Xin chào mình là Ciin laf toi dday nef ban oiw oiwf oiw,
											mai banj cos di hocj ko bal bla bla bloa bla dfg reg rg rg
											rg
										</span>
									</div>
									<div className="message-my">
										<span className="my-content">
											Xin chào mình là Ciin laf toi dday nef ban oiw oiwf oiw,
											mai banj cos di hocj ko bal bla bla bloa bla dfg reg rg rg
											rg
										</span>
									</div>
									<div className="message-my">
										<span className="my-content">
											Xin chào mình là Ciin laf toi dday nef ban oiw oiwf oiw,
											mai banj cos di hocj ko bal bla bla bloa bla dfg reg rg rg
											rg
										</span>
									</div>
									<div className="message-my">
										<span className="my-content">
											Xin chào mình là Ciin laf toi dday nef ban oiw oiwf oiw,
											mai banj cos di hocj ko bal bla bla bloa bla dfg reg rg rg
											rg
										</span>
									</div>
								</div>
							</div>
							<div className="message-send">
								<input type="text" placeholder="Write a message..." />
								<i class="bx bx-wink-smile"></i>
								<i class="bx bx-send"></i>
							</div>
						</div>
					)}
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
