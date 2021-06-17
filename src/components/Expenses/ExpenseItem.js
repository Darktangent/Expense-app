import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const clickhandler = () => {
		setTitle('Updated title');
		console.log(title);
	};
	return (
		<Card className='expense-item'>
			<ExpenseDate dateOfExpense={props.dateOfExpense} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			<button onClick={clickhandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
