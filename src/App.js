import React, { useState, useEffect } from 'react'
import Header from './components/header';
import GlobalStyle from './styles/global';
import Resume from './components/resume';
import Form from './components/form';

const App = () => {

  // Carrega as transações do localStorage se elas existirem
  const data = localStorage.getItem('transactions');

  // Define o estado inicial das transações
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  // Define o estado inicial do resumo financeiro
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  // Atualiza o resumo financeiro toda vez que o estado das transações muda
  useEffect(() => {
    // Filtra as transações por tipo de despesa (expense) e soma os valores
    const amountExpense = transactionsList
      .filter((item) => item.expense)  // filtra as transações de despesa
      .map((transaction) => Number(transaction.amount)); // extrai os valores de cada transação

    // Filtra as transações por tipo de renda (!expense) e soma os valores
    const amountIncome = transactionsList
      .filter((item) => !item.expense)  // filtra as transações de renda
      .map((transaction) => Number(transaction.amount)); // extrai os valores de cada transação

    // Soma as despesas e rendas, e calcula o total
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(income - expense).toFixed(2);

    // Atualiza o estado do resumo financeiro
    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`)
  }, [transactionsList]);

  // Adiciona uma nova transação ao estado e ao localStorage
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  }

  // Renderiza os componentes
  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <GlobalStyle />
    </>
  );
};

export default App
