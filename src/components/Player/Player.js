import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import prev from "../../assets/images/prev.svg";
import btnPause from "../../assets/images/play.svg";
import next from "../../assets/images/next.svg";
import btnPlay from "../../assets/images/pause.svg";
import audios from "../../data/Music.js";
import "./style.scss";

const Player = () => {
	const data = useSelector((state) => state.volumeState);
	const { volumeValue } = data;
	const audioElement = useRef();
	const [isPlaying, setIsPlaying] = useState(false);
	const [audioIndex, setAudioIndex] = useState(0);

	useEffect(() => {
		if (isPlaying) {
			audioElement.current.play();
		} else {
			audioElement.current.pause();
		}
		audioElement.current.volume = volumeValue / 100;
	});
	console.log("useref: ", audioElement);
	return (
		<div className="content-player">
			<audio loop src={audios[audioIndex].src} ref={audioElement}></audio>
			<div className="music-info">
				<span>Music by: @_libra</span>
			</div>
			<div className="control">
				<div
					className="btn-skip"
					onClick={() =>
						setAudioIndex(() => {
							if (audioIndex === 0) {
								return 0;
							} else {
								return (audioIndex - 1) % audios.length;
							}
						})
					}
				>
					<img src={prev} alt="" />
				</div>
				<div className="btn-play" onClick={() => setIsPlaying(!isPlaying)}>
					{isPlaying ? (
						<img src={btnPlay} alt="" />
					) : (
						<img src={btnPause} alt="" />
					)}
				</div>
				<div
					className="btn-next"
					onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
				>
					<img src={next} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Player;
