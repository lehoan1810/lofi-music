import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { getListStatistic } from "../../redux/actions/statistic";

const ManagerStatistic = () => {
	const dispatch = useDispatch();
	const [listStatistic, setListStatisTic] = useState([]);

	const listData = useSelector((state) => state.statisticReducer);
	useEffect(() => {
		dispatch(getListStatistic());
	}, []);

	useEffect(() => {
		if (listData.listStatistic.statisticMessageForThePastMonth) {
			const result = listData.listStatistic.statisticMessageForThePastMonth.map(
				(a) => a.count
			);
			setListStatisTic(result);
		}
	}, [listData]);

	const overallScore = listData.listStatistic.evaluateScore;

	const guestOption = {
		stroke: {
			curve: "smooth",
		},
	};
	const guestSeries = [
		{
			name: "Message",
			data: listStatistic,
		},
	];

	return (
		<div className="right-content">
			<div className="statistic-form">
				<div className="custom-chart">
					<h1 className="title-statistic">Chart Message Month!</h1>

					<Chart
						type="line"
						series={guestSeries}
						options={guestOption}
						width={600}
					/>
				</div>
				<div className="custom-rating">
					<h1 className="title-statistic">Average Rating!</h1>

					<Rating
						showTooltip
						allowHalfIcon
						readonly
						initialValue={overallScore ? overallScore.overallScore : 0}
					/>
				</div>
			</div>
		</div>
	);
};

export default ManagerStatistic;
