import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Provide from "./context/provide";
import Navbar from "./components/Navbar";
import Developer from "./components/developer";
import Teachers from "./components/Teachers";
import Students from "./components/students";
import Batches from "./components/batches";
import EditTeacher from "./components/TeachersEdit";
import EditStudent from "./components/StudentsEdit";
import AddStudent from "./components/addStudent";
import AddTeacher from "./components/addTeacher";
import AddBatch from "./components/addBatch";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provide>
          <Navbar />

          <Routes>
            <Route path="/developer" element={<Developer />} />
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/add-batch" element={<AddBatch />} />
            <Route path="/edit-teachers/:id" element={<EditTeacher />} />
            <Route path="/edit-students/:id" element={<EditStudent />} />
            <Route path="/add-students" element={<AddStudent />} />
            <Route path="/add-teacher" element={<AddTeacher />} />
          </Routes>
        </Provide>
      </BrowserRouter>
    </div>
  );
}

export default App;
