import React, { useState } from "react";
import { FaTrash, FaEdit, FaCheckSquare } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const TodoList = ({ todo, dispatch }) => {
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  // const localTodos = JSON.parse(localStorage.getItem(todosList));

  const handleSave = () => {
    if (input)
      dispatch({ type: "EDIT_TODO", payload: { id: todo.id, value: input } });
    setIsEdit(false);
  };

  return (
    <>
      <div className="card-container">
        <Card className="card">
          <Card.Body>
            <InputGroup>
              <Form.Control
                className="control"
                value={todo.inputValue}
                aria-label="Recipient's username with two button addons"
                plaintext
                readOnly
              />

              <FaEdit className="icons edit" onClick={() => setIsEdit(true)} />
              <FaCheckSquare
                className={
                  todo.completed ? "icons completed" : "icons incomplete"
                }
                onClick={() =>
                  dispatch({ type: "MARK_TODO", payload: { id: todo.id } })
                }
              />
              <FaTrash
                className="icons trash"
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
                }
              />
            </InputGroup>
          </Card.Body>
        </Card>
      </div>

      {/* {isEdit && ( */}
      <Modal show={isEdit} onHide={() => setIsEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="text"
              placeholder={todo.inputValue}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* )} */}
    </>
  );
  // return (
  //   <div>
  //     <p>{todo.inputValue}</p>
  //     <button
  //       onClick={() =>
  //         dispatch({ type: "MARK_TODO", payload: { id: todo.id } })
  //       }
  //     >
  //       {todo.completed ? "completed" : "incomplete"}
  //     </button>
  //     <button
  //       onClick={() =>
  //         dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
  //       }
  //     >
  //       Delete
  //     </button>
  //   </div>
  // );
};

export default TodoList;
