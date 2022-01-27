import { combineReducers } from "redux";

// import userReducer from "./userReducer";
import modeReducer from "./modeReducer";
// import rainReducer from "./rainReducer";
// import moodReducer from "./moodReducer";
// import volumeReducer from "./volumeReducer";

export const rootReducer = combineReducers({
	// userState: userReducer,
	modeState: modeReducer,
	// rainState: rainReducer,
	// moodState: moodReducer,
	// volumeState: volumeReducer,
});
