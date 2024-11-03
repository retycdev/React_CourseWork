import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 64px;
  padding: 8px 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #3c3d37;
  border-radius: 12px 12px 0 0;
`;
const Logo = styled.div`
  height: 40px;
  color: #ecdfcc;
  h3 {
    font-size: 28px;
  }
`;
const Avatar = styled.div`
  height: 40px;
  width: 40px;
  color: #229799;
  background-color: #f5f5f5;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Topbar = () => {
  return (
    <div>
      <Container>
        <Logo>
          <h3>TodoList.</h3>
        </Logo>
        <Avatar>
          <p>d</p>
        </Avatar>
      </Container>
    </div>
  );
};

export default Topbar;
