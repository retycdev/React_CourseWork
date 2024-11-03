import React, { useState, useRef } from "react";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import List_card from "./components/List_card";

const App_container = styled.div`
  max-width: 640px;
  margin: auto;
  height: 100vh;
  border-radius: 12px;
  background-color: #1e201e;
  color: white;
`;
const Input_container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px;
`;
const Input_field = styled.input`
  flex: 3;
  height: 56px;
  outline: none;
  border: none;
  border-radius: 16px;
  padding: 4px 16px;
  background-color: #f8eded;
`;
const Input_actions = styled.div`
  flex: 1;
`;
const Btn = styled.button`
  height: 40px;
  padding: 0 24px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #697565;
  color: #ecdfcc;
`;
const Todolist_container = styled.div`
  padding: 24px;
`;

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    if (task.trim()) {
      setTodoList([...todoList, task.trim()]);
      setTask("");
      inputRef.current.focus();
    }
  };

  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const handleUpdate = (index, updatedTask) => {
    const updatedList = [...todoList];
    updatedList[index] = updatedTask;
    setTodoList(updatedList);
  };

  return (
    <div>
      <App_container>
        <Topbar />
        <Input_container>
          <Input_field
            ref={inputRef}
            placeholder="What you wanna do today?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Input_actions>
            <Btn onClick={handleClick}>Add Task</Btn>
          </Input_actions>
        </Input_container>
        <Todolist_container>
          {todoList.map((todo, index) => (
            <List_card
              key={index}
              task={todo}
              handleUpdate={(updatedTask) => handleUpdate(index, updatedTask)}
              handleDelete={() => handleDelete(index)}
            />
          ))}
        </Todolist_container>
      </App_container>
    </div>
  );
};

export default App;
