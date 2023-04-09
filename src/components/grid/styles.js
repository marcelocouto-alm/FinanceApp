import styled from 'styled-components';

export const Table = styled.table`
  width: 98%;
  padding: 20px;
  max-width: 1120px;
  margin: 20px auto;
  border-radius: 10px;
  background: #262D2E;
  box-shadow:  5px -5px 10px #1d2323,
             -5px 5px 10px #1d2323;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  color: #FFFFFF
`;

export const Th = styled.th`
  border-bottom: 1px solid #FFFFFF;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width + '%' : 'auto')}
`;

