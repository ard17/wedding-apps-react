import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import Topup from './Topup';

import { doAccPaymentRequest } from '../../redux/actions/accPayment';

export default function AccPayment(props) {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.accPaymentState.accPayment);

	let [isTopupOpen, setIsTopupOpen] = useState(false);

	const [action, setAction] = useState({
		acc_number: undefined,
		actionType: undefined,
	});

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const payload = {};
		dispatch(doAccPaymentRequest(payload));
	}

	const onTopup = (id) => {
		setAction({
			acc_number: id,
			actionType: 'topup',
		});
		setIsTopupOpen(true);
	};

	return (
		<div className="flex flex-col">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Account
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Saldo
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Point
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								<tr>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										{data.acc_number}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										{data.acc_saldo}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
										{data.acc_total_point}
									</td>

									<div className="flex flex-row-reverse space-x-0 space-x-reverse">
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<div className="flex flex-row space-x-4 mt-4">
												<button
													type="button"
													className="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-200 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
													onClick={() =>
														onTopup(data.acc_number)
													}
												>
													Topup Saldo
												</button>
											</div>
										</td>
									</div>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<ToastContainer autoClose={2000} />
			{isTopupOpen ? (
				<Topup
					isTopupOpen={isTopupOpen}
					closeModal={() => setIsTopupOpen(false)}
					action={action}
				/>
			) : null}
		</div>
	);
}
