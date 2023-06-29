import React, { useState } from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Batches() {
  const [batch, setBatch] = useState([]);
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);

  const { id } = useParams();

  const Delette = async (id) => {
    console.log(id);
    await axios
      .delete(`https://server-school-teacher.onrender.com/batches/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch("https://server-school-teacher.onrender.com/students", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);

  useEffect(() => {
    fetch("https://server-school-teacher.onrender.com/teachers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  useEffect(() => {
    fetch("https://server-school-teacher.onrender.com/batches", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setBatch(data));
  }, []);

  // Extracting batch wise student and teachers list
  const BatchList = []; // for batch name
  const studentBatch = []; // for batchwise students data
  const teacherBatch = []; // for batchwise teachers data
  const teacherbatch = [];
  const studentbatch = [];
  let data = [];
  for (let i = 0; i < batch.length; i++) {
    BatchList.push(batch[i].name);
  }
  {
    BatchList.map((e) => {
      teacher.map((a) => {
        if (a.batch == e) teacherbatch.push({ [e]: a.name });
      });
      student.map((a) => {
        if (a.batch == e) studentbatch.push({ [e]: a.name });
      });
    });
  }

  function getFields(input, field) {
    var output = [];
    for (var i = 0; i < input.length; ++i) {
      if (input[i][field] != undefined) output.push(input[i][field]);
    }

    return output;
  }

  {
    BatchList.map((e) => {
      var result1 = getFields(teacherbatch, e);
      teacherBatch.push(result1);
      var result2 = getFields(studentbatch, e);
      studentBatch.push(result2);
    });
  }
  // extrating done

  console.log("students:", studentBatch);
  console.log("teachers:", teacherBatch);
  console.log("batch:", batch);

  {
    for (let i = 0; i < batch.length; i++) {
      data.push({
        name: batch[i].name,
        students: studentBatch[i],
        teachers: teacherBatch[i],
        type: batch[i].type,
      });
    }
    console.log("data test:", data);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {data.map((e) => (
          <Card style={{ width: "700px", height: "auto" }}>
            <CardContent>
              <Card style={{ backgroundColor: "GrayText" }}>
                <h4>
                  Name: <b>{e.name}</b>
                </h4>
              </Card>
              <Card style={{ backgroundColor: "lightgrey" }}>
                <h3> Teachers: </h3>
                {e.teachers.map((a) => (
                  <p>{a}</p>
                ))}
              </Card>
              <Card
                style={{
                  backgroundColor: "lightgrey",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                }}
              >
                <h3>Students:</h3>
                {e.students.map((a) => (
                  <p>{a}</p>
                ))}
              </Card>
              <Card style={{ backgroundColor: "lightgrey" }}>
                <h4>
                  Batch Type:<b>{e.type} </b>
                </h4>
              </Card>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0px 10px 0px 0px",
              }}
            >
              <Button
                size="small"
                color="error"
                onClick={() => Delette(e.name)}
              >
                <NavLink to="/batches" style={{ textDecoration: "none" }}>
                  Delete Batch
                </NavLink>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 10px 0px 0px",
          justifyContent: "center",
        }}
      >
        <Button size="small" color="error">
          <NavLink to="/add-batch" style={{ textDecoration: "none" }}>
            Create Batch
          </NavLink>
        </Button>
      </CardActions>
      <h3>
        For editing just edit students and teachers batch in teachers and
        students details page, they are automatically move to changed batches
      </h3>
    </div>
  );
}

export default Batches;
