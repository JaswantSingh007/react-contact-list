import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = ({ contactList, setcontactList }) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("clicked!");
    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        website: website,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        let contact = contactList.findIndex(
          (contact) => contact.id === parseInt(id)
        );
        contactList.splice(contact, 1, json);
        setcontactList([...contactList]);
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <h2 className="text-center mb-10 text-5xl">Update Contact</h2>
      <div key={id}>
        <form className="ml-20 mr-8" onSubmit={handelSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              defaultValue={name}
              type="text"
              required
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Mobile phone</label>
            <input
              defaultValue={phone}
              type="tel"
              required
              className="form-control"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              defaultValue={email}
              type="email"
              required
              className="form-control"
              // aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Website</label>
            <input
              defaultValue={website}
              type="text"
              required
              className="form-control"
              placeholder="Website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
            <Button type="button" href="/" variant="contained" color="primary">
              back
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditContact;
