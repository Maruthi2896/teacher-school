import { Card, CardActions, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Students() {
  const [data, setData] = useState([]);
  const handleChange = () => {};

  const Delette = async (id) => {
    await axios
      .delete(`http://localhost:7100/students/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch(`http://localhost:7100/students`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Card style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p>Sl.no:</p>
        <p>Name:</p>
        <p>Id:</p>
        <p>Date Of Birth:</p>
        <p>Batch:</p>
        <p>Actions</p>
      </Card>
      {data.map((e, i) => (
        <Card
          style={{
            display: "flex",
            marginLeft: "40px",
            justifyContent: "space-evenly",
          }}
        >
          <p>{i + 1}</p>
          <p>{e.name}</p>
          <p>{e.Id}</p>
          <p>{e.dob}</p>
          <p>{e.batch}</p>
          <CardActions>
            <Button size="small">
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/edit-students/${e._id}`}
              >
                Edit
              </NavLink>
            </Button>
            <Button size="small" color="error" onClick={() => Delette(e._id)}>
              <NavLink to="/students" style={{ textDecoration: "none" }}>
                Delete
              </NavLink>
            </Button>
          </CardActions>
        </Card>
      ))}
      <Button
        style={{ margin: "20px" }}
        variant="outlined"
        color="primary"
        size="small"
      >
        <NavLink to="/add-students" style={{ textDecoration: "none" }}>
          Add New Students
        </NavLink>
      </Button>
    </div>
  );
}

export default Students;
