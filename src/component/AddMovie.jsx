import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/action";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const newtexte = {
      id: Math.random(),
      title: name,
      description: description,
      imgURL: imageURL,
      date: date,
      rate: rate,
    };

    if (name && description && imageURL && date && rate) {
      dispatch(add(newtexte));
      handleClose();
    } else {
      alert("please fill all the form");
    }
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handlesubmit}
          >
            <label htmlFor="">Movie Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Cover URL</label>
            <input
              type="text"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="">Movie Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <label htmlFor="">Rating</label>
            <input
              type="text"
              value={rate}
              onChange={(e) => {
                setRate(e.target.value);
              }}
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
