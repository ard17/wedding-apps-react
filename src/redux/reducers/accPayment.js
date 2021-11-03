import * as ActionTypeAccPayment from '../constants/accPayment';
// initial data
const INIT_STATE = {
	accPayment: [],
	isLoading: false,
	error: null,
	status: null,
};

// create reducer
const accPaymentReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ActionTypeAccPayment.GET_ACCPAYMENT_REQUEST:
			return applyGetAccPaymentRequest(state, action);
		case ActionTypeAccPayment.GET_ACCPAYMENT_SUCCEED:
			return applyGetAccPaymentSucceed(state, action);
		case ActionTypeAccPayment.GET_ACCPAYMENT_FAILED:
			return applyGetAccPaymentFailed(state, action);
		case ActionTypeAccPayment.UPDATE_ACCPAYMENT_REQUEST:
			return applyUpdateAccPaymentRequest(state, action);
		case ActionTypeAccPayment.UPDATE_ACCPAYMENT_SUCCEED:
			return applyUpdateAccPaymentSucceed(state, action);
		case ActionTypeAccPayment.UPDATE_ACCPAYMENT_REQUEST:
			return applyTopupRequest(state, action);
		case ActionTypeAccPayment.UPDATE_ACCPAYMENT_SUCCEED:
			return applyTopupSucceed(state, action);

		default:
			return state;
	}
};

//action reducer
const applyGetAccPaymentRequest = (state, action) => {
	return {
		...state,
		isLoading: true,
	};
};

const applyGetAccPaymentSucceed = (state, action) => {
	return {
		...state,
		accPayment: action.payload,
		isLoading: false,
	};
};

const applyGetAccPaymentFailed = (state, action) => {
	return {
		...state,
		isLoading: false,
		error: action.payload.error,
	};
};

const applyUpdateAccPaymentRequest = (state, action) => {
	return {
		...state,
		isLoading: true,
	};
};

const applyUpdateAccPaymentSucceed = (state, action) => {
	const { payload } = action;
	const accPayment = state.accPayment.map((acc) => {
		if (acc.acc_number === payload.acc_number) {
			acc.acc_pin_number = payload.acc_pin_number;
			return acc;
		}
		return acc;
	});
	return {
		...state,
		accPayment,
		isLoading: false,
	};
};

const applyTopupRequest = (state, action) => {
	return {
		...state,
		isLoading: true,
	};
};

const applyTopupSucceed = (state, action) => {
	const { payload } = action;
	const accPayment = state.accPayment.map((acc) => {
		if (acc.acc_number === payload.acc_number) {
			acc.acc_saldo = payload.acc_saldo;
			return acc;
		}
		return acc;
	});
	return {
		...state,
		accPayment,
		isLoading: false,
	};
};

export default accPaymentReducer;
