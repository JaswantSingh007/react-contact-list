const ContactList=({contactList})=>{
    // const handelUpdate=()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             id: 1,
    //             title: 'foo',
    //             body: 'bar',
    //             userId: 1,
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    // }

    const handelDelete=(e)=>{
        e.preventDefault();
        console.log("clicked");
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });
    }


    return(
        <>
            {contactList?.map((contact, index)=> (
                <div key={index} className="bg-white h-auto w-auto rounded-lg shadow-md p-7 ">
                    <p className="text-gray-700 font-sans text-xl font-semibold mb-2 text-center">
                        {contact.name}
                    </p>
                    <p><span className="font-medium text-gray-500">Phone : </span>
                        {contact.phone}
                    </p>
                    <p><span className="font-medium text-gray-500">Email : </span> 
                        {contact.email}
                    </p>
                    <p><span className="font-medium text-gray-500">Address(City) : </span> 
                        {contact.address.city}
                    </p>
                    <p><span className="font-medium text-gray-500">Website : </span> 
                        {contact.website} 
                    </p>
                    <div className='text-center mt-4'>
                        <button type="button" className='border rounded-full pt-1 pb-1 pl-2 pr-2 shadow-md mr-3 mt-3 bg-yellow-300'>Update</button>
                        <button type="button" onClick={handelDelete} className='border rounded-full pt-1 pb-1 pl-2 pr-2 shadow-md mt-3 bg-red-600'>Delete</button>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default ContactList;