import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const InsertStudent = ({refresh}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");

    const clear = () => {
        setName("");
        setEmail("");
        setContact("");
        setCity("");
    }
   const handleSubmit = ()  => {
        const data = {
            "name":name,
            "email":email,
            "contact":contact,
            "city":city,
        }
        axios.post("http://127.0.0.1:8000/api/student/insert",data).then(res => {
            refresh();
            clear();
        });
    }
  return (
    <div className='col-5'>
        <div className="mb-3">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="">contact</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="">email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="">city</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" />
        </div>
        <div className="mb-4">
            <button type="submit" className='btn btn-success' onClick={handleSubmit}>Create new Record</button>
        </div>
    </div>
  )
}

export default InsertStudent