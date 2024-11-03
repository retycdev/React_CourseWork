import React, { useState } from "react";
import styled from "styled-components";
import { CiEdit, CiTrash, CiCircleCheck } from "react-icons/ci";

const Card_container = styled.div`
  min-height: 64px;
  background-color: #3c3d37;
  color: #ecdfcc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid #ecdfcc;
`;
const Content = styled.div`
  flex: 5;
  padding: 8px 16px;
`;
const EditableInput = styled.input`
  flex: 5;
  padding: 8px 16px;
  background-color: #3c3d37;
  color: #ecdfcc;
  border: none;
  outline: none;
  font-size: 16px;
`;
const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 12px;
  font-size: 24px;
  cursor: pointer;
`;

const List_card = ({ task, handleUpdate, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleUpdate(editedTask);
    setIsEditing(false);
  };

  return (
    <Card_container>
      {isEditing ? (
        <EditableInput
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={handleSaveClick} // Save changes when the input loses focus
        />
      ) : (
        <Content>{task}</Content>
      )}
      <Actions>
        {isEditing ? (
          <CiCircleCheck onClick={handleSaveClick} />
        ) : (
          <CiEdit onClick={handleEditClick} />
        )}
        <CiTrash onClick={handleDelete} />
      </Actions>
    </Card_container>
  );
};

export default List_card;
