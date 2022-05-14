export const getLocal = (key, value) => {
	localStorage.setItem(key, value);
};

export const setLocal = (key) => {
	return localStorage.getItem(key);
};
