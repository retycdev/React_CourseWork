import React from "react";
import styled from "styled-components";

// Styled components for the table
const Table_Container = styled.table`
  margin-top: 48px;
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
  border-collapse: collapse;
`;

const THead = styled.thead`
  background-color: #f6f6f6;
  color: #3c3d37;
  font-weight: bold;
`;

const TH = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid gray;
`;

const Tr = styled.tr``;

const TD = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid gray;
`;

//main component
const Table = ({ data }) => {
  return (
    <div>
      <Table_Container>
        <THead>
          <Tr>
            <TH>Title</TH>
            <TH>Type</TH>
            <TH>Document Name</TH>
            <TH>Date of Publication</TH>
          </Tr>
        </THead>
        <tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <TD>{row.title}</TD>
              <TD>{row.type}</TD>
              <TD>{row.documentName}</TD>
              <TD>{row.dateOfPublication}</TD>
            </Tr>
          ))}
        </tbody>
      </Table_Container>
    </div>
  );
};

export default Table;
