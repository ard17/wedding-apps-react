import * as ActionTypeAccPayment from '../constants/accPayment';

export const doAccPaymentRequest = (payload) => ({
	type: ActionTypeAccPayment.GET_ACCPAYMENT_REQUEST,
	payload,
});

export const doAccPaymentSucceed = (payload) => ({
	type: ActionTypeAccPayment.GET_ACCPAYMENT_SUCCEED,
	payload,
});

export const doAccPaymentFailed = (payload) => ({
	type: ActionTypeAccPayment.GET_ACCPAYMENT_FAILED,
	payload,
});

export const doUpdateAccPaymentRequest = (payload) => ({
	type: ActionTypeAccPayment.UPDATE_ACCPAYMENT_REQUEST,
	payload,
});

export const doUpdateAccPaymentSucceed = (payload) => ({
	type: ActionTypeAccPayment.UPDATE_ACCPAYMENT_SUCCEED,
	payload,
});

export const doTopupRequest = (payload) => ({
	type: ActionTypeAccPayment.TOPUP_REQUEST,
	payload,
});

export const doTopupSucceed = (payload) => ({
	type: ActionTypeAccPayment.TOPUP_SUCCEED,
	payload,
});

export const doPayOrderRequest = (payload) => ({
	type: ActionTypeAccPayment.PAY_ORDER_REQUEST,
	payload,
});

export const doPayOrderSucceed = (payload) => ({
	type: ActionTypeAccPayment.PAY_ORDER_SUCCEED,
	payload,
});

export const doCancelOrderRequest = (payload) => ({
	type: ActionTypeAccPayment.CANCEL_ORDER_REQUEST,
	payload,
});

export const doCancelOrderSucceed = (payload) => ({
	type: ActionTypeAccPayment.CANCEL_ORDER_SUCCEED,
	payload,
});

export const doCloseOrderRequest = (payload) => ({
	type: ActionTypeAccPayment.CLOSE_ORDER_REQUEST,
	payload,
});

export const doCloseOrderSucceed = (payload) => ({
	type: ActionTypeAccPayment.CLOSE_ORDER_SUCCEED,
	payload,
});

export const doTarikUangRequest = (payload) => ({
	type: ActionTypeAccPayment.TARIK_UANG_REQUEST,
	payload,
});

export const doTarikUangSucceed = (payload) => ({
	type: ActionTypeAccPayment.TARIK_UANG_SUCCEED,
	payload,
});
