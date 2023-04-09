import React from 'react';
import GridItem from '../grid-item';
import * as C from './styles';

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    // Filtragem do array itens, criando um novo array newArray com todos os itens que possuem um ID diferente do passado como parâmetro
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    // Atualização do estado de itens com o novo array newArray
    setItens(newArray);
    // Armazenamento do novo array newArray no localStorage, convertido em uma string JSON
    localStorage.setItem('transactions', JSON.stringify(newArray));
  }

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Descrição</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={10} alignCenter>Tipo</C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>

      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>

    </C.Table>
  )
}

export default Grid