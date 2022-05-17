import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import authHeader from "../../sevices";
import "./style.scss";

const ManagerStatistic = () => {
	const [listStatistic, setListStatisTic] = useState([]);

	const urls = `${process.env.REACT_APP_LOFI_URL}/rest/admin/statistic`;

	useEffect(() => {
		const show = async () => {
			await axios
				.get(urls, { headers: authHeader() })
				.then((res) => {
					const getCount = res.data.statisticMessageForThePastMonth;
					const result = getCount.map((a) => a.count);
					setListStatisTic(result);
				})
				.catch((err) => console.log(err));
		};
		show();
	}, []);

	const guestOption = {
		stroke: {
			curve: "smooth",
		},
		//..
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
					width={800}
				/>
			</div>
		</div>
	);
};

export default ManagerStatistic;
