import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewCard } from "./State/Action/Cards";
import imgLogo from "../Component/Images/img4.jpg";

export const CardDispatch = () => {
  window.onbeforeunload = function () {
    return false;
  };
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [name, setName] = useState();
  const [descp, setDescp] = useState();
  const [link, setLink] = useState();
  const handelDispatch = ({}) => {
    dispatch(addNewCard(imgLogo, title, name, descp, link));
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title "
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrition</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter descp"
            onChange={(e) => setDescp(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Link</Form.Label>
          <Form.Control
            type="Link"
            placeholder="Enter link"
            onChange={(e) => setLink(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handelDispatch}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
