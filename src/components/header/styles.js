import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  text-align: center;
`;

export const Header = styled.h1``;

export const Title = styled.div`
  padding-top: 20px;
  font-size: 2.5rem;
  color: #fff;

  -webkit-animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both;
	        animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both;

  @-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
`;