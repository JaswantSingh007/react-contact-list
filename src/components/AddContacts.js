import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddContact = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');

    const handelSubmit=(e)=>{
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name:name,
                phone:number,
                email:email,
                address:address,
                website:website,
                id:'',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json());
        // .then((json) => console.log(json));
    }

    return (
    <>
        <h2 className='text-center mb-10 text-5xl'>Create New Contact</h2>
        <form className='ml-20 mr-8'>
        <div className='mb-3'>
            <label>Name</label>
            <input type='text' required className='form-control' placeholder='Name' onChange={(e)=>setName(e.target.value)} />
        </div>
            <div className='mb-3'>
                <label>Mobile Number</label>
                <input type="number" required className="form-control" placeholder='Number' onChange={(e)=>setNumber(e.target.value)} />
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='mb-3'>
                <label>Address</label>
                {/* <input type='text' className="mb-2 form-control" placeholder='Street' onChange={(e)=>setAddress(e.target.value)}/> */}
                <input type='text' required className="mb-2 form-control" placeholder='City' onChange={(e)=>setAddress(e.target.value)}/>
                {/* <input type='number' className="form-control" placeholder='ZipCode' onChange={(e)=>setAddress(e.target.value)}/> */}
            </div>
            <div className='mb-3'>
                <label>Website</label>
                <input type="url" className='form-control' placeholder='Website' onChange={(e)=>setWebsite(e.target.value)} />
            </div>
            <Link to='/read'>
                <button type="submit" className="btn btn-primary bg-blue-500" onSubmit={handelSubmit}>Submit</button>
            </Link>
        </form>
    </>
  )
}

export default AddContact;