import './App.css';
import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from "@mui/material";
import ContactList from './components/ContactCards';
import AddContact from './components/AddContacts';
import Read from './components/Read';

const App = () => {
  
  // fatching data from API(Application Programing Interface)
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json());

  // using useState for contact list
  const[contactList, setcontactList]=useState();

  useEffect(() => {
    fatchData();
  }, [])

  const fatchData=async()=>{
    let response=await(
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();
    setcontactList(response);
  };


  return (
    <>
      <Router>
        <div className="bg-gray-200 pb-4">
         <h2 className='text-center mb-10 text-5xl pt-2'>Contact List</h2>
          <form>
            <input type="text" className="ml-20 rounded-md p-2" placeholder="Search Contact..."></input>
          </form>
        </div>
        <div className='bg-gray-200 flex flex-row pl-20 pt-4 pb-4'>
          <Link to="/AddContacts">
              <Button variant='contained' color='primary' className='add-button'>
                  Add New Contact
              </Button>
          </Link>
        </div>
        <Routes>
          <Route exact path='/AddContacts' element={<AddContact />} />
        </Routes>
        <div className="p-20 grid sm:grid-cols-2  lg:grid-cols-3 gap-6"> 
          <Routes> 
            <Route exact path='/' element={<ContactList contactList={contactList} />} />
            <Route exact path='/Read' element={<Read />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
