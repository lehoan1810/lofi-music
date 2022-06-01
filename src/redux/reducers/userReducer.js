import { USER_CURRENT } from "../constants/actionAdmin";

const INITIAL_STATE = {
	listCurrentUser: [],
};

const getCurrentUser = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_CURRENT:
			return {
				...state,
				listCurrentUser: action.payload,
			};

		default:
			return state;
	}
};

export default getCurrentUser;
