import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from './layout/common';
import { MainLayout, MainLayoutSidebar } from './layout';

import {
	Home as HomePage,
	Category as CategoryPage,
	Product as ProductPage,
	AccPayment as AccPaymentPage,
	PageNotFound,
} from './pages';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const Routes = () => {
	return (
		<Switch>
			<Redirect exact from="/" to="/home" />
			<Redirect exact from="/signin" to="/mywedding/signin" />

			<Route path="/mywedding/signup" component={SignUp} />
			<Route path="/mywedding/signin" component={SignIn} />

			<RouteWithLayout
				component={HomePage}
				exact
				layout={MainLayout}
				pageTitle=""
				path="/home"
			/>
			<RouteWithLayout
				component={PageNotFound}
				exact
				layout={MainLayoutSidebar}
				pageTitle="404"
				path="/not-found"
			/>

			<RouteWithLayout
				component={CategoryPage}
				exact
				layout={MainLayoutSidebar}
				pageTitle="Category"
				path="/seller/category"
			/>
			<RouteWithLayout
				component={ProductPage}
				exact
				layout={MainLayoutSidebar}
				pageTitle="Product"
				path="/seller/product"
			/>
			<RouteWithLayout
				component={AccPaymentPage}
				exact
				layout={MainLayoutSidebar}
				pageTitle="Account Payment"
				path="/seller/account"
			/>
			<Redirect to="/not-found" status="404" />
		</Switch>
	);
};

export default Routes;
