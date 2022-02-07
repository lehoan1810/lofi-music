import { SET_MOOD } from "../constants/actionType";

const INITIAL_STATE = {
	moodValue: "chill",
};
const moodReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_MOOD:
			return {
				...state,
				moodValue: action.moodValue,
			};
		default:
			return state;
	}
};

export default moodReducer;
