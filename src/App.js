import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Sidebar from "./components/Admin/index";
import ManagerUser from "./pages/ManagerUser/index";
import ManagerStatistic from "./pages/Statistic/index";
import "./App.scss";
import Loading from "./common/Loading";
import ManagerMessage from "./pages/ManagerMessage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="login" element={<Login />} />
				<Route path="test" element={<Loading />} />
				<Route path="admin" element={<Sidebar />}>
					<Route path="ManagerUser" element={<ManagerUser />} />
					<Route path="ManagerStatistic" element={<ManagerStatistic />} />
					<Route path="ManagerMessage" element={<ManagerMessage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
