import { takeEvery, all } from 'redux-saga/effects';
import * as ActionType from '../constants/category';
import * as ActionTypeUser from '../constants/user';
import * as ActionTypeAccPayment from '../constants/accPayment';

import {
	handleCreateCategory,
	handleDeleteCategory,
	handleGetCategory,
	handleUpdateCategory,
} from '../sagas/categorySaga';
import { handleSignup, handleSignin } from '../sagas/userSaga';
import {
	handleGetAccPayment,
	handleTopup,
	handleUpdateAccPayment,
} from '../sagas/accPaymentSaga';

function* watchAll() {
	yield all([
		takeEvery(ActionType.GET_CATEGORY_REQUEST, handleGetCategory),
		takeEvery(ActionType.CREATE_CATEGORY_REQUEST, handleCreateCategory),
		takeEvery(ActionType.UPDATE_CATEGORY_REQUEST, handleUpdateCategory),
		takeEvery(ActionType.DELETE_CATEGORY_REQUEST, handleDeleteCategory),
		takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
		takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
		takeEvery(
			ActionTypeAccPayment.GET_ACCPAYMENT_REQUEST,
			handleGetAccPayment
		),
		takeEvery(
			ActionTypeAccPayment.UPDATE_ACCPAYMENT_REQUEST,
			handleUpdateAccPayment
		),
		takeEvery(ActionTypeAccPayment.TOPUP_REQUEST, handleTopup),
	]);
}

export default watchAll;
