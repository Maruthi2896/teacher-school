import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, Typography, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

function EditTeacher() {
  const [data, setData] = useState({
    name: "",
    img: "",
    salary: "",
    date_of_join: "",
    native_place: "",
    subject: "",
    batch: "",
  });

  const { id } = useParams();

  const Cancell = () => {
    setData({
      name: "",
      img: "",
      salary: "",
      date_of_join: "",
      native_place: "",
      subject: "",
      batch: "",
    });
  };
  useEffect(() => {
    fetch(`https://server-school-teacher.onrender.com/teachers/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const { name, img, salary, date_of_join, native_place, subject, batch } =
    data;

  const handleChange = (e) => {
    const user = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(user);
  };
  const Submitt = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://server-school-teacher.onrender.com/teacher-edit/${id}`,
        data
      )
      .then(() =>
        setData({
          name: "",
          img: "",
          salary: "",
          date_of_join: "",
          native_place: "",
          subject: "",
          batch: "",
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
            <h3 style={{ margin: "20px" }}> Name:</h3>
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
            <h3 style={{ margin: "10px" }}>Image URL:</h3>
            <TextField
              style={{ margin: "10px", width: "300px" }}
              id="outlined-basic"
              label="URL:"
              name="img"
              value={img}
              variant="outlined"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Salary:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Salary:"
              value={salary}
              name="salary"
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Date Of Join:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Date"
              name="date_of_join"
              value={date_of_join}
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Native Place:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Native:"
              value={native_place}
              name="native_place"
              variant="outlined"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Subject:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Subject:"
              name="subject"
              variant="outlined"
              value={subject}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Batch:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Batch:"
              name="batch"
              variant="outlined"
              value={batch}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
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

            <NavLink to="/teachers" style={{ textDecoration: "none" }}>
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
        <Card
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "30px",
          }}
        >
          preview
          <CardMedia
            sx={{ height: 400, width: 400 }}
            image={`${img}`}
            title={`${name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name:{name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h3>:</h3>
              Salary:{salary}
            </Typography>
            <br />
            <Typography gutterBottom variant="body2" component="div">
              Date Of Join:{date_of_join}
            </Typography>
            <br />
            <Typography gutterBottom variant="body2" component="div">
              Batch: {batch}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Subject:
              {subject}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Native Place:
              {native_place}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default EditTeacher;
