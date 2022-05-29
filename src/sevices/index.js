export default function authHeader() {
	const token = sessionStorage.getItem("tokenAdmin");
	const user = sessionStorage.getItem("userName");
	if (user && token) {
		return { Authorization: `Bearer ${token}` };
	} else {
		return {};
	}
}
