import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, Typography, CardActions, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import axios from "axios";

function AddBatch() {
  const [data, setData] = useState({
    name: "",
    type: "",
  });

  const { id } = useParams();

  const Cancell = () => {
    setData({
      name: "",
      type: "",
    });
  };
  console.log("test data:", data);
  const { name, type } = data;

  const handleChange = (e) => {
    const user = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(user);
  };
  const Delette = () => {};
  const Submitt = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:7100/add-batch`, data).then(() =>
      setData({
        name: "",
        type: "",
      })
    );
  };
  return (
    <div>
      <div>
        <Box className="createuser">
          <Card
            style={{
              width: "400px",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <div>
              <h3 style={{ margin: "20px" }}>Name:</h3>
              <TextField
                style={{ margin: "10px", width: "300px" }}
                id="outlined-basic"
                label="Name:"
                name="name"
                value={name}
                variant="outlined"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <h3 style={{ margin: "10px" }}>Type of Batch:</h3>
              <TextField
                style={{ margin: "10px", width: "300px" }}
                id="outlined-basic"
                label="week day/week end"
                name="type"
                value={type}
                variant="outlined"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0px 10px 0px 0px",
              }}
            >
              <Button
                style={{ margin: "10px" }}
                variant="outlined"
                color="success"
                onClick={(e) => Submitt(e)}
              >
                <NavLink to="/teachers" style={{ textDecoration: "none" }}>
                  Submit
                </NavLink>
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => Delette()}
              >
                <NavLink to="/batches" style={{ textDecoration: "none" }}>
                  Cancel
                </NavLink>
              </Button>
            </CardActions>
          </Card>

          <Card style={{ width: "700px", height: "auto" }}>
            <CardContent>
              <Card style={{ backgroundColor: "GrayText" }}>
                <h4>
                  Name: <b>{name}</b>
                </h4>
              </Card>
              <Card style={{ backgroundColor: "lightgrey" }}>
                <h4>
                  Batch Type:<b>{type} </b>
                </h4>
              </Card>
            </CardContent>
          </Card>
        </Box>
      </div>
      <h2>
        Just add new teachers and students with batch as this name or edit some
        teachers or students batches as this name That will automatic saves in
        batch list.
      </h2>
    </div>
  );
}

export default AddBatch;
