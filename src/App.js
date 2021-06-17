// import logo from './logo.svg';
// import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 13.12,
			date: new Date(2021, 7, 21),
		},
		{
			id: 'e2',
			title: 'Portable HD',
			amount: 91.12,
			date: new Date(2021, 7, 21),
		},
		{
			id: 'e3',
			title: 'Batteries',
			amount: 29.99,
			date: new Date(2021, 7, 21),
		},
		{
			id: 'e4',
			title: 'Car Insurance',
			amount: 149.99,
			date: new Date(2021, 7, 21),
		},
	];
	const addExpenseHandler = (expense) => {
		console.log(expense);
	};
	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
};

export default App;
