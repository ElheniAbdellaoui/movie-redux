import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filter } from "../redux/action";
import Star from "./Star";

const Filter = ({ handlerating, starrate, search, sear, handlecategory }) => {
  return (
    <div style={{ top: 0, position: "fixed", width: "100%", zIndex: "1000" }}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">MOVIE REDUX</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <select
              name=""
              id=""
              onChange={(e) => handlecategory(e.target.value)}
            >
              <option value="all">ALL</option>
              <option value="action">ACTION</option>
              <option value="romantic">ROMANTIC</option>
              <option value="kids">KIDS</option>
            </select>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={sear}
              />
            </Form>
            <Star rate={starrate} handlerating={handlerating} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Filter;
