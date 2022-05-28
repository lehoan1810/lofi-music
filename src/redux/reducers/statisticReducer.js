import { GET_STATISTIC } from "../constants/statisticType";

const INITIAL_STATE = {
	listStatistic: [],
};

const statisticReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_STATISTIC:
			return {
				...state,
				listStatistic: action.payload,
			};

		default:
			return state;
	}
};

export default statisticReducer;
