import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	doAccPaymentRequest,
	doAccPaymentSucceed,
} from '../../redux/actions/accPayment';

export default function Product() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.accPaymentState.accPayment);

	useEffect(() => {
		const payload = {};
		dispatch(doAccPaymentSucceed(payload));
	}, []);
	return (
		<div>
			<h2>Product: {data.acc_number}</h2>
		</div>
	);
}
