import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom"

interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}
const ContactList = () => {
  const [data, setData] = useState<Contact[]>([]);
  useEffect(() => {
    axios
      .get<Contact[]>('http://localhost:8086/api/contacts/')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  
  return (
    <div>
      <div className='container'>
        <h2 className='text-center'>Contacts List</h2>
        <div className='row-6' >
         <div className='container '> <NavLink to="/add-contacts" ><button className='btn btn-primary '>Add</button></NavLink></div>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered my-2'>
            <thead>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th> 
              </tr>
            </thead>
            <tbody>
              {data.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.firstname}</td>
                  <td>{contact.lastname}</td>
                  <td>{contact.email}</td>
                  <td>
                    <button className='btn btn-primary btn-sm mx-3'>Edit</button>
                    <button className='btn btn-danger btn-sm'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
