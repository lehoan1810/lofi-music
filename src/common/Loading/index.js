import React from "react";
import loadingGif from "../../assets/gif/cat.gif";
import "./style.scss";

const Loading = () => {
	return (
		<>
			<div className="background-loading">
				<img src={loadingGif} alt="wait until the page loads" />
			</div>
		</>
	);
};

export default Loading;
