import {
	all,
	call,
	fork,
	put,
	takeEvery,
	takeLatest,
} from 'redux-saga/effects';

import apiAccPayment from '../../api/api-accpayment';
import {
	doAccPaymentSucceed,
	doAccPaymentFailed,
	doUpdateAccPaymentSucceed,
	doTopupSucceed,
} from '../actions/accPayment';

function* handleGetAccPayment(action) {
	const { payload } = action;
	try {
		const result = yield call(apiAccPayment.account, payload);
		//simpan ke redux store
		yield put(doAccPaymentSucceed(result));
	} catch (error) {
		yield put(doAccPaymentFailed(error));
	}
}

function* handleUpdateAccPayment(action) {
	const { payload } = action;
	try {
		const result = yield call(apiAccPayment.update, payload);
		//simpan ke redux store
		yield put(doUpdateAccPaymentSucceed(result.data[1][0]));
	} catch (error) {
		yield put(doAccPaymentSucceed(error));
	}
}

function* handleTopup(action) {
	const { payload } = action;
	try {
		const result = yield call(apiAccPayment.topup, payload);
		//simpan ke redux store
		yield put(doTopupSucceed(result.data));
	} catch (error) {
		yield put(doAccPaymentSucceed(error));
	}
}

export { handleGetAccPayment, handleUpdateAccPayment, handleTopup };
