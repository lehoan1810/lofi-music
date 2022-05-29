import axios from "axios";
import authHeader from "../../sevices";
import { GET_STATISTIC } from "../constants/statisticType";

export const getListStatistic = () => {
	return async function (dispatch) {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_LOFI_URL}/rest/admin/statistic`,
				{ headers: authHeader() }
			);

			dispatch({
				type: GET_STATISTIC,
				payload: res.data,
				loading: false,
			});
		} catch (err) {
			console.log(err);
		}
	};
};
