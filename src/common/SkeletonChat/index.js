import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.scss";

const SkeletonChat = () => {
	return (
		<div>
			<div className="flex">
				<Skeleton height={30} width={80} />
				<Skeleton height={30} width={250} />
			</div>
			<div className="flex">
				<Skeleton height={30} width={80} />
				<Skeleton height={30} width={250} />
			</div>
			<div className="flex">
				<Skeleton height={30} width={80} />
				<Skeleton height={30} width={250} />
			</div>
			<div className="flex">
				<Skeleton height={30} width={80} />
				<Skeleton height={30} width={250} />
			</div>
			<div className="flex">
				<Skeleton height={30} width={80} />
				<Skeleton height={30} width={250} />
			</div>
			<div className="flex">
				<Skeleton height={30} width={80} />
				<Skeleton height={30} width={250} />
			</div>
			<div className="flex">
				<Skeleton height={30} width={80} />
				<Skeleton height={30} width={250} />
			</div>
			<div className="flex">
				<Skeleton height={30} width={80} />
				<Skeleton height={30} width={250} />
			</div>
		</div>
	);
};

export default SkeletonChat;
