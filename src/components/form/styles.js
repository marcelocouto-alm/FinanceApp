import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 95%;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  border-radius: 10px;
  background: #262D2E;
  box-shadow:  5px -5px 10px #1d2323,
             -5px 5px 10px #1d2323;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #FFFFFF;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #FFFFFF;
  outline: 0;
  font-size: 1rem;
  color: #FFFFFF;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  ::placeholder {
  color: #FFFFFF;
}

  &[type=number]::-webkit-outer-spin-button,
  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 20px;
  background-color:#262d2e;
	border-radius: 30px;
	border: 1px solid #FFFFFF;
	display:inline-block;
	cursor:pointer;
	color:#FFFFFF;
	font-family:Arial;
	font-size: .8rem;
	text-decoration:none;

  :hover {
	background-color:#FFFFFF;
  color: #262d2e
}
`;