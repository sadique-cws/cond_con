import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from './components/Banner'
import Calling from './components/Calling'
import Header from './components/Header'
import InsertStudent from './components/InsertStudent'
import Login from './components/Login'
import Register from './components/Register'


const HomePage = (props) => (
  <>
    <Banner />
    <div className="container">
      <div className='row p-4'>
        <InsertStudent refresh={props.refresh}/>
        <Calling {...props} />
      </div>
    </div>
  </>
)
const App = () => {
  const [studentData, setStudentData] = useState([]);

  const HandleApi  = () => {
    axios.get("http://127.0.0.1:8000/api/student").then(res => setStudentData(res.data.students))
  }
  useEffect(() => {
    HandleApi();
  }, [])


  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<HomePage studentData={studentData} refresh={HandleApi} />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App