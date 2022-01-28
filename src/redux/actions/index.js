import {
	// SET_USER,
	SET_MODE,
	SET_RAIN,
	// SET_MOOD,
	// SET_VOLUME,
	// LIST_ADD,
	// LIST_REMOVE,
	// LIST_ADD_DONE,
	// LIST_REMOVE_DONE,
} from "../constants/actionType";
export const setMode = (payload) => ({
	type: SET_MODE,
	mode: payload,
});
export const setRain = (payload, value) => ({
	type: SET_RAIN,
	rainMode: payload,
	rainValue: value,
});

// export function
export function changeDayNight(currentStatus) {
	let status;
	if (currentStatus === "day") status = "night";
	else if (currentStatus === "night") status = "day";
	return (dispatch) => {
		dispatch(setMode(status));
	};
}

export function changeRain(currentStatus, value) {
	let status;
	if (currentStatus === "rain") status = "clear";
	else if (currentStatus === "clear") status = "rain";
	return (dispatch) => {
		dispatch(setRain(status, value));
	};
}
