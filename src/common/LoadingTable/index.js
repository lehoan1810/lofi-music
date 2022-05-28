import React from "react";
import "./style.scss";

const LoadingTable = () => {
	return (
		<div className="form-loading">
			<div className="loader">
				<div className="ball"></div>
				<div className="ball"></div>
				<div className="ball"></div>
				<span>Loading...</span>
			</div>
		</div>
	);
};

export default LoadingTable;
