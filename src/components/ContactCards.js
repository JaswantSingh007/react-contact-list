import { useNavigate } from "react-router-dom";

const ContactList = ({ contactList, setcontactList }) => {
  const navigate = useNavigate();

  const handelUpdate = (id) => {
    navigate("/editContact/" + id);
  };

  const handelDelete = async (id) => {
    console.log(id);
    await fetch("https://jsonplaceholder.typicode.com/users/" + id, {
      method: "DELETE",
    })
      .then(() => {
        setcontactList(contactList.filter((contact) => contact.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className=" p-20 grid sm:grid-cols-2  lg:grid-cols-3 gap-6">
      {contactList.map((contact, index) => (
        <div
          key={index}
          className="bg-white h-auto w-auto rounded-lg shadow-md p-7 "
        >
          <p className="text-gray-700 font-sans text-xl font-semibold mb-2 text-center">
            {contact.name}
          </p>
          <p>
            <span className="font-medium text-gray-500">Phone : </span>
            {contact.phone}
          </p>
          <p>
            <span className="font-medium text-gray-500">Email : </span>
            {contact.email}
          </p>
          <p>
            <span className="font-medium text-gray-500">Website : </span>
            {contact.website}
          </p>
          <div className="text-center mt-4">
            <button
              onClick={() => {
                handelUpdate(contact.id);
              }}
              type="button"
              className="border rounded-full pt-1 pb-1 pl-2 pr-2 shadow-md mr-3 mt-3 bg-yellow-300"
            >
              Update
            </button>
            <button
              onClick={() => {
                handelDelete(contact.id);
              }}
              type="button"
              className="border rounded-full pt-1 pb-1 pl-2 pr-2 shadow-md mt-3 bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
