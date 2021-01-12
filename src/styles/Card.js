import styled from 'styled-components';

export const Cards = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 30px;
  padding: 5px;
  cursor: pointer;
  perspective: 1000px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #ccc;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  justify-self: center;

  transition: all .25s ease-in-out;

  &:focus, &:hover {
    box-shadow: 3px 3px 5px #ccc;
    transform: translateY(-2px);
  }
`;

// Card side - front
export const CardFront = styled(Cards)`
  ${Cards};

  font-weight: bold;
  text-align: center;
`

// Card side - back
export const CardBack = styled(Cards)`
  ${Cards};

  /* transform: rotateY( 180deg); */
`


export const Icon = styled.div` 
  justify-content: center;
  text-align: center;
  font-size: 3em;
`;

export const CardBox = styled.div`
  display: flex;
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-gap: 10px; */
  flex-wrap: wrap;
  justify-content: center;
  background-color: transparent;
`;


