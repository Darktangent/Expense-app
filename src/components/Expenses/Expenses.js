import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
function Expenses(props) {
	const { expenses } = props;
	const [filteredYear, setFilteredYear] = useState('2020');
	const handleDatePick = (pickedDate) => {
		setFilteredYear(pickedDate);
		// setFilteredYear((prev)=>{
		// 	return {}
		// })
		console.log(pickedDate);
		// console.log(filteredYear);
	};
	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter selected={filteredYear} pickedDate={handleDatePick} />
				<ExpenseItem
					amount={expenses[0].amount}
					title={expenses[0].title}
					dateOfExpense={expenses[0].date}
				/>
				<ExpenseItem
					amount={expenses[1].amount}
					title={expenses[1].title}
					dateOfExpense={expenses[1].date}
				/>
				<ExpenseItem
					amount={expenses[2].amount}
					title={expenses[2].title}
					dateOfExpense={expenses[2].date}
				/>
				<ExpenseItem
					amount={expenses[3].amount}
					title={expenses[3].title}
					dateOfExpense={expenses[3].date}
				/>
			</Card>
		</div>
	);
}
export default Expenses;
