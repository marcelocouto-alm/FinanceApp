import React from "react";
import * as C from './styles';
import { MdAttachMoney, MdMoneyOffCsred } from 'react-icons/md';
import { CiTrash } from 'react-icons/ci';

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>

      <C.Td>{item.amount}</C.Td>

      <C.Td alignCenter>
        {item.expense ? (
          <MdMoneyOffCsred color='#FFFFFF' />
        ) : (
          <MdAttachMoney color='#FFFFFF' />
        )}
      </C.Td>

      <C.Td alignCenter>
        <CiTrash onClick={() => onDelete(item.id)} />
      </C.Td>

    </C.Tr>
  )
}

export default GridItem;