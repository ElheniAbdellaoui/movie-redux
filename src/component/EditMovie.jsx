import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../redux/action";

const EditMovie = ({ el }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(el.title);
  const [imgURL, setImgURL] = useState(el.imgURL);
  const [description, setDescription] = useState(el.description);
  const [date, setDate] = useState(el.date);
  const [rate, setRate] = useState(el.rate);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleedit = (e) => {
    e.preventDefault();
    const newedit = {
      id: el.id,
      title: title,
      imgURL: imgURL,
      description: description,
      date: date,
      rate: rate,
    };
    title && imgURL && description && date && rate.trim() === ""
      ? alert("zid 7ata 7arf a bo5ly")
      : dispatch(edit(newedit));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "25px",
              flexWrap: "wrap",
            }}
            onSubmit={handleedit}
          >
            <Form.Control
              type="text"
              placeholder="Enter your title"
              style={{ width: "80%" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Enter your image"
              style={{ width: "80%" }}
              value={imgURL}
              onChange={(e) => setImgURL(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Enter your description"
              style={{ width: "80%" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />{" "}
            <Form.Control
              type="texte"
              placeholder="Enter your date"
              style={{ width: "80%" }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />{" "}
            <Form.Control
              type="number"
              placeholder="Enter your title"
              style={{ width: "80%" }}
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditMovie;
