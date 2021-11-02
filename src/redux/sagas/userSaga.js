import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiUser from '../../api/api-user';
import {  
    doSignupSucceed,doSignupFailed,
    doSigninSucceed
} from '../actions/user';

function* handleSignup(action) {
    const {payload} = action;
    try {
        const result = yield call(apiUser.signup,payload);
        yield put(doSignupSucceed(result.data));
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

function* handleSignin(action) {
    const {payload} = action;
    try {
        const result = yield call(apiUser.signin,payload);
        yield put(doSigninSucceed(result.data));
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

export {
    handleSignup,handleSignin
}