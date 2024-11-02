import React from "react";
import Table from "./components/Table";
import Inputs from "./components/Inputs";
import styled from "styled-components";

// Table data
import tableData from "./assets/data";
import Button from "./components/Button";

const App_Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  font-size: 28px;
  font-weight: bold;
  margin: 48px;
`;
const App_Container = styled.div`
  padding: 0 64px;
`;

const App = () => {
  return (
    <div>
      <App_Container>
        <Button />
      </App_Container>
    </div>
  );
};

export default App;
