import axios from 'axios';
import config from '../config/config';

const account = async (data) => {
	try {
		const response = await axios.get(`${config.domain}/account_payment/`, {
			params: {
				acc_user_id: 2,
			},
		});
		return response.data;
	} catch (err) {
		return await err.message;
	}
};

const update = async (data) => {
	try {
		const response = await axios.put(
			`${config.domain}/account_payment/${data.acc_number}`,
			data
		);
		return response.data;
	} catch (err) {
		return await err.message;
	}
};

const topup = async (data) => {
	try {
		const result = await axios.post(`${config.domain}/payment/topup`, data);
		return result;
	} catch (error) {
		return error;
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	account,
	update,
	topup,
};
