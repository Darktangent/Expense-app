import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });
	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
		// setUserInput({ ...userInput, enteredTitle: e.target.value });
	};
	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: e.target.value,
		// });
	};
	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
		// // setUserInput({
		// // 	...userInput,
		// // 	enteredAmount: e.target.value,
		// // });
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredDate: e.target.value };
		// });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		// console.log(expenseData);
		setEnteredTitle('');
		setEnteredDate('');
		setEnteredAmount('');
	};
	return (
		<form action='' onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
						value={enteredAmount}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='title'>Date</label>
					<input
						type='date'
						min='2021-06-01'
						max='2024-12-31'
						onChange={dateChangeHandler}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
