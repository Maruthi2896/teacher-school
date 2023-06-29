import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, Typography, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import axios from "axios";

function EditStudent() {
  const [data, setData] = useState({
    name: "",
    Id: "",
    batch: "",
    dob: "",
  });

  const { id } = useParams();

  const Cancell = () => {
    setData({
      name: "",
      Id: "",
      batch: "",
      dob: "",
    });
  };
  useEffect(() => {
    fetch(`http://localhost:7100/students/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log("test data:", data);
  const { name, Id, batch, dob } = data;

  const handleChange = (e) => {
    const user = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(user);
  };
  const Submitt = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:7100/edited-students/${id}`, data).then(() =>
      setData({
        name: "",
        img: "",
        about: "",
        role: "",
        company: "",
        address: "",
      })
    );
  };
  return (
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
            <h3 style={{ margin: "10px" }}>Date Of Birth:</h3>
            <TextField
              style={{ margin: "10px", width: "300px" }}
              id="outlined-basic"
              label="DD/MM/YYYY"
              name="dob"
              value={dob}
              variant="outlined"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>ID:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="ID:"
              value={Id}
              name="Id"
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Batch:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Batch:"
              name="batch"
              value={batch}
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <Button
              style={{ margin: "10px" }}
              variant="outlined"
              color="success"
              onClick={(e) => Submitt(e)}
            >
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Submit
              </NavLink>
            </Button>

            <NavLink to="/students" style={{ textDecoration: "none" }}>
              <Button
                style={{ margin: "10px" }}
                variant="outlined"
                color="error"
                onClick={() => Cancell()}
              >
                Cancel
              </Button>
            </NavLink>
          </div>
        </Card>

        <Card style={{ width: "300px", margin: "10px" }}>
          Preview:
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dob}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {batch}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default EditStudent;
