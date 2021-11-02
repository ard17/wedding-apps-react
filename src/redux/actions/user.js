import * as ActionType from '../constants/user';

export const doSignupRequest = (payload) => ({
    type: ActionType.ADD_SIGNUP_REQUEST,
    payload,
});

export const doSignupSucceed = (payload) => ({
    type: ActionType.ADD_SIGNUP_SUCCEED,
    payload,
});

export const doSignupFailed = (payload) => ({
    type: ActionType.SIGNUP_FAILED,
    payload,
});

export const doSigninRequest = (payload) => ({
    type: ActionType.GET_SIGNIN_REQUEST,
    payload,
});

export const doSigninSucceed = (payload) => ({
    type: ActionType.GET_SIGNIN_SUCCEED,
    payload,
});