import { takeEvery, all } from 'redux-saga/effects';
import * as ActionType from '../constants/category';
import * as ActionTypeUser from '../constants/user';

import {handleCreateCategory, 
        handleDeleteCategory, 
        handleGetCategory,handleUpdateCategory} 
from '../sagas/categorySaga';

import {handleSignup,handleSignin} from '../sagas/userSaga'

function *watchAll(){
    yield all([
        takeEvery(ActionType.GET_CATEGORY_REQUEST,handleGetCategory),
        takeEvery(ActionType.CREATE_CATEGORY_REQUEST,handleCreateCategory),
        takeEvery(ActionType.UPDATE_CATEGORY_REQUEST,handleUpdateCategory),
        takeEvery(ActionType.DELETE_CATEGORY_REQUEST,handleDeleteCategory),
        takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST,handleSignup),
        takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST,handleSignin)

    ])
}

export default watchAll;