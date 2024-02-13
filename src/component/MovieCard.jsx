import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/action";
import EditMovie from "./EditMovie";
import Star from "./Star";

const MovieCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.imgURL} style={{ height: "350px" }} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            description:{el.description}
            <br />
            date:{el.date}
            <br />
            <Star rate={el.rate} />
          </Card.Text>
          <Button onClick={() => dispatch(deleteTask(el.id))} variant="danger">
            delete
          </Button>
          <EditMovie el={el} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
