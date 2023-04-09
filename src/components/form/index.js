import React, { useState } from 'react';
import Grid from '../grid'
import * as C from './styles';

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

  // Declaração de estados com useState para armazenar os valores dos inputs
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [isExpense, setExpense] = useState(false);

  // Função para gerar um id aleatório
  const generateID = () => Math.round(Math.random() * 1000);

  // Função para tratar o clique do botão salvar
  const HandleSave = () => {
    // Validação simples para garantir que os campos descrição e valor foram preenchidos
    if (!desc || !amount) {
      alert('Informe a descrição e o valor!');
      return;
    }
    // Validação para garantir que o valor informado é positivo
    else if (amount < 1) {
      alert('O valor tem que ser positivo!');
      return;
    }

    // Cria um objeto transaction com as informações preenchidas pelo usuário
    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    // Chama a função handleAdd passando a transaction criada
    handleAdd(transaction);

    // Limpa os campos de descrição e valor
    setDesc('');
    setAmount('');
  };

  // Retorno do componente Form
  return (
    <>
      <C.Container>
        <C.RadioGroup>
          <C.Input type='radio'
            id='rIncome'
            defaultChecked
            name='group1'
            onChange={() => setExpense(!isExpense)} />
          <C.Label htmlFor='rIncome'>Entrada</C.Label>

          <C.Input type='radio'
            id='rExpenses'
            name='group1'
            onChange={() => setExpense(!isExpense)} />
          <C.Label htmlFor='rExpenses'>Saída</C.Label>
        </C.RadioGroup>

        <C.InputContent>
          <C.Input placeholder='Descrição' value={desc} onChange={(event) => setDesc(event.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Input placeholder='Valor' value={amount} type='number' onChange={(event) => setAmount(event.target.value)} />
        </C.InputContent>

        <C.Button onClick={HandleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form
