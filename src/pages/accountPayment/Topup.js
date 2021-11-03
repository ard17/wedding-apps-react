import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { doTopupRequest } from '../../redux/actions/accPayment';

export default function Topup(props) {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.accPaymentState);

	const [values, setValues] = useState({
		acc_number: undefined,
		acc_saldo: '',
	});

	useEffect(() => {
		const { acc_number } = state.accPayment;
		setValues({ ...values, acc_number: acc_number, acc_saldo: 0 });
	}, [props.action.id]);

	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			acc_number: values.acc_number,
			amount: values.acc_saldo,
			baac_acc_bank: '12345642323',
			baac_pin_number: '123456',
			payt_type: 'topup',
		};
		dispatch(doTopupRequest(payload));
		props.closeModal();
		toast.success('Saldo Updated.');
	};

	return (
		<div>
			<Transition appear show={props.isTopupOpen} as={Fragment}>
				<Dialog
					as="div"
					static
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={() => null}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-900"
								>
									Topup Saldo
								</Dialog.Title>
								<div className="mt-2">
									<form action="#" method="POST">
										<div className="col-span-6 sm:col-span-3">
											<input
												type="text"
												name="acc_number"
												value={values.acc_number}
												onChange={handleChange(
													'acc_number'
												)}
												hidden
											/>
											<label
												htmlFor="last-name"
												className="block text-sm font-medium text-gray-700"
											>
												Saldo
											</label>
											<input
												type="text"
												name="acc_saldo"
												value={values.acc_saldo}
												onChange={handleChange(
													'acc_saldo'
												)}
												className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 uppercase rounded-md"
											/>
										</div>
									</form>
								</div>

								<div className="flex flex-row space-x-4 mt-4">
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
										onClick={onSubmit}
									>
										Submit
									</button>

									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
										onClick={props.closeModal}
									>
										Cancel
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
}
