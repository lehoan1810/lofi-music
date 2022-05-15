import React from "react";

import { Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Statistic from "../components/Statistic";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin" component={Statistic} />
			<Route path="/" exact component={Header} />
		</Switch>
	);
};

export default Routes;
