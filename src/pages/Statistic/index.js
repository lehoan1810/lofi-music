import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import authHeader from "../../sevices";
import { badMessage, createBadWord } from "../../redux/actions/badMessage";
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
			console.log(result);
		}
	}, [listData]);

	const {
		evaluateScore,
		statisticMessageForThePastMonth,
		totalMessageThisMonth,
		totalMessagesToday,
	} = listData.listStatistic;
	console.log(
		"show: ",
		evaluateScore,
		statisticMessageForThePastMonth,
		totalMessageThisMonth,
		totalMessagesToday
	);

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
			<div className="custom-chart">
				<Chart
					type="line"
					series={guestSeries}
					options={guestOption}
					width={600}
				/>
			</div>
		</div>
	);
};

export default ManagerStatistic;
