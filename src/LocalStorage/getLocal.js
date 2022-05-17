export const getLocal = (key, value) => {
	sessionStorage.setItem(key, value);
};

export const setLocal = (key) => {
	return sessionStorage.getItem(key);
};
