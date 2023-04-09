import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  width: 30%;
  border-radius: 10px;
  background: #262D2E;
  box-shadow:  5px -5px 10px #1d2323,
             -5px 5px 10px #1d2323;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 30px;
    height: 30px;
    color: #FFFFFF;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  color: #FFFFFF;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
`