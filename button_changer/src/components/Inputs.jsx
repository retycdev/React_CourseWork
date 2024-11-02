import React from "react";
import styled from "styled-components";

// elements stylings from styled components

//container div to hold select & input elements
const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  width: 100%;

  min-height: 80px;
`;

//select element
const Select = styled.select`
  height: 48px;
  flex: 1;
  outline: none;
  background-color: white;
  font-size: 14px;
  border-radius: 8px;
  padding: 0 24px;
  font-size: 14px;
`;
//input element
const Input = styled.input`
  height: 48px;
  flex: 2;
  outline: none;
  border: 1px solid black;
  background-color: white;
  border-radius: 8px;
  padding: 0 24px;
`;

const TextArea = styled.textarea``;
const Form = styled.form``;
//Inputs component
const Inputs = () => {
  return (
    <div>
      <Container>
        <Select>
          <option>HR Reports</option>
        </Select>
        <Input type="text" placeholder="Search reports..." />
      </Container>
    </div>
  );
};

export default Inputs;
