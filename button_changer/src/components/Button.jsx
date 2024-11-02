import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 640px;
  widht: 640px;
  gap: 24px;
  h2 {
    font-size: 64px;
  }
`;
const Btn = styled.button`
  height: 40px;
  padding: 0 24px;
  border: none;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  color: white;
`;

const Button = () => {
  //const counter=0
  const [clicked, setClicked] = useState(false); //true false

  return (
    <div>
      <Container>
        <Btn
          style={{ backgroundColor: `${clicked ? "purple" : "black"}` }}
          onClick={() => {
            setClicked(!clicked); //reverse previous value
          }}
        >
          Click me
        </Btn>
      </Container>
    </div>
  );
};

export default Button;
