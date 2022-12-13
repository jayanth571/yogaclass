import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [name, setname] = useState("");
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const Text = () => <h2>{name} paid 500</h2>;
  const month = [
    {
      abbreviation: "Jan",
      name: "January"
    },
    {
      abbreviation: "Feb",
      name: "February"
    },
    {
      abbreviation: "Mar",
      name: "March"
    },
    {
      abbreviation: "Apr",
      name: "April"
    },
    {
      abbreviation: "May",
      name: "May"
    },
    {
      abbreviation: "Jun",
      name: "June"
    },
    {
      abbreviation: "Jul",
      name: "July"
    },
    {
      abbreviation: "Aug",
      name: "August"
    },
    {
      abbreviation: "Sep",
      name: "September"
    },
    {
      abbreviation: "Oct",
      name: "October"
    },
    {
      abbreviation: "Nov",
      name: "November"
    },
    {
      abbreviation: "Dec",
      name: "December"
    }
  ];
  const date = [
    { date: "6-7am" },
    { date: "7-8 am" },
    { date: "8-9am" },
    { date: "5-6pm" }
  ];
  function loadname(e) {
    setname(e.target.value);
  }
  return (
    <div className="text-center">
      <h1>yoga class</h1>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            name
          </label>
          <input
            type="text"
            onChange={loadname}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            age
          </label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <div>
            <label>slect month</label>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            {month.map((item) => (
              <option value="1">{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <div>
            <label>slect batch</label>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            {date.map((item) => (
              <option value="1">{item.date}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <div>
            <h3>payment:500</h3>
          </div>
        </div>

        <button onClick={onClick} className="btn btn-primary">
          pay
        </button>
        {showText ? <Text /> : null}
      </div>
    </div>
  );
}
