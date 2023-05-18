import React from "react";
import { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const CourseCreate= () => {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [values, setValues] = useState("");
  const [catagory, setCatagory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, values, catagory,discription });
  };

  return (
    <>
      <h1 className="jumbotron  text-center bg-primary square">Create Course</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Course name"
            required
          />
            <textarea
              name="description"
              cols="7"
              rows="7"
              placeholder="Enter Course Desciption"
              value={discription}
              className="form-control"
              onChange={(e) => setDiscription(e.target.value)}
            ></textarea>
            <br></br>
        
          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <Select
                  style={{ width: "100%" }}
                  size="large"
                  value={values.paid}
                  onChange={(v) => setValues({ ...values, paid: v, price: 0 })}
                >
                  <Option value={true}>Paid</Option>
                  <Option value={false}>Free</Option>
                </Select>
              </div>
            </div>
            <br></br>
          </div>
          <input
            type="text"
            className="form-control mb-4 p-2"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
            placeholder="Course Catagory"
            required
          />
          <button type="submit" className="createbtn btn-block btn-primary mb-4 p-2">
            Click to Create
          </button>
        </form>
      </div>
     
    </>
  );
};

export default CourseCreate;
