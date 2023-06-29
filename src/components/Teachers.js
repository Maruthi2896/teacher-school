import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Teachers() {
  const [data, setData] = useState([]);

  const Delette = async (id) => {
    await axios
      .delete(`http://localhost:7100/teachers/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("http://localhost:7100/teachers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div>
      <div className="teachers">
        {data.map((e) => (
          <Card style={{ width: "400px", height: "680px" }}>
            <CardMedia
              sx={{ height: 300, width: 300 }}
              style={{ marginLeft: "50px", marginTop: "10px" }}
              image={`${e.img}`}
              title={`${e.name}`}
            />
            <CardContent>
              <h4>
                Name: <b>{` ${e.name}`}</b>
              </h4>
              <h4>
                Salary: <b>{` ${e.salary}`}</b>
              </h4>
              <h4>
                Date Of Join:<b>{` ${e.date_of_join}`} </b>
              </h4>
              <h4>
                Native Place:<b>{` ${e.native_place}`} </b>
              </h4>
              <h4>
                Subject:<b>{` ${e.subject}`}</b>
              </h4>
              <h4>
                Batch handling:<b>{` ${e.batch}`}</b>
              </h4>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0px 10px 0px 0px",
              }}
            >
              <Button size="small">
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/edit-teachers/${e._id}`}
                >
                  Edit
                </NavLink>
              </Button>
              <Button
                size="small"
                color="error"
                onClick={() => Delette(`${e._id}`)}
              >
                <NavLink to="/teachers" style={{ textDecoration: "none" }}>
                  Delete
                </NavLink>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      <Button
        variant="outlined"
        style={{ margin: "20px" }}
        size="small"
        color="primary"
      >
        <NavLink to="/add-teacher" style={{ textDecoration: "none" }}>
          Add New Teacher
        </NavLink>
      </Button>
    </div>
  );
}

export default Teachers;
