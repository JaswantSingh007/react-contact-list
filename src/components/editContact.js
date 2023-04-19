import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = ({ setcontactList, contactList }) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const contactDetails = { name, phone, email, address, website };
    console.log("clicked!");
    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "PUT",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const updatedContacts = contactList.map((contact) => {
          if (contact.id === id) {
            contact.contactDetails = contactDetails;
          }
          return contact;
        });
        setcontactList((contactList) => updatedContacts);
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <h2 className="text-center mb-10 text-5xl">Update Contact</h2>
      <form className="ml-20 mr-8" onSubmit={handelSubmit}>
        {/* <input value={id} disabled="disabled" className="form-control" /> */}
        <div className="mb-3">
          <label>Name</label>
          <input
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
            type="number"
            required
            className="form-control"
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            required
            className="mb-2 form-control"
            placeholder="City"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Website</label>
          <input
            type="url"
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
    </>
  );
};

export default EditContact;
