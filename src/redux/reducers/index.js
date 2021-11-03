import { combineReducers } from 'redux';
import categoryReducer from './category';
import userReducer from './user';
import accPaymentReducer from './accPayment';

const rootReducer = combineReducers({
	categoryState: categoryReducer,
	userState: userReducer,
	accPaymentState: accPaymentReducer,
});

export default rootReducer;
