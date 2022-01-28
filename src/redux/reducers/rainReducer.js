import { SET_RAIN } from "../constants/actionType";

const INITIAL_STATE = {
	rainMode: "clear",
	rainValue: 0,
};

const rainReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_RAIN:
			return {
				...state,
				rainMode: action.rainMode,
				rainValue: action.rainValue,
			};
		default:
			return state;
	}
};

export default rainReducer;
