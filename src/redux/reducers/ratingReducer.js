import { GET_RATING, POST_RATING } from "../constants/actionRating";

const INITIAL_STATE = {
	listRating: [],
};

const badMessageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_RATING:
			return {
				...state,
				listRating: action.payload,
			};
		case POST_RATING:
			return {
				...state,
				listRating: [...state.listRating, action.payload],
			};

		default:
			return state;
	}
};

export default badMessageReducer;
