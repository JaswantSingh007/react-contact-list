import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";
import ContactList from "./components/ContactCards";
import AddContact from "./components/AddContacts";
import EditContact from "./components/editContact";

const App = () => {
  const [contactList, setcontactList] = useState([]);

  // fatching data from API(Application Programing Interface)
  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setcontactList(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Router>
        <div className="bg-gray-100 p-4">
          <h2 className="text-center text-5xl pt-2 pb-3">Contact List</h2>
        </div>
        <div className="bg-gray-100 pb-4 flex flex-row justify-between">
          <Link to="/" className="ml-10">
            <Button variant="contained" color="info">
              Home
            </Button>
          </Link>
          <form>
            <input
              type="text"
              className="rounded-md ml-24 shadow-md p-2"
              placeholder="Search Contact..."
            ></input>
          </form>
          <Link to="/AddContacts" className="mr-10">
            <Button variant="contained" color="primary">
              Add New Contact
            </Button>
          </Link>
        </div>

        <Routes>
          <Route
            exact
            path="/"
            element={<ContactList contactList={contactList} />}
          />
          <Route
            exact
            path="/AddContacts"
            element={
              <AddContact
                contactList={contactList}
                setcontactList={setcontactList}
              />
            }
          />
          <Route
            exact
            path="/editContact/:id"
            element={
              <EditContact
                contactList={contactList}
                setcontactList={setcontactList}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
