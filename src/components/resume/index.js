import React from "react";
import ResumeItem from "../resume-itens";
import * as C from './styles';
import { GiReceiveMoney, GiPayMoney, GiMoneyStack } from 'react-icons/gi'

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem title='Ganhos' Icon={GiReceiveMoney} value={income} />
      <ResumeItem title='Despesas ' Icon={GiPayMoney} value={expense} />
      <ResumeItem title='Saldo' Icon={GiMoneyStack} value={total} />
    </C.Container>
  );
};

export default Resume;