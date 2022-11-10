import React from 'react'

const Calling = ({studentData}) => {

  return (
    <div className='col-7'>
        <table className='table w-100 table-bordered table-hover'>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>contact</th>
                <th>email</th>
                <th>city</th>
                <th>action</th>
            </tr>
            </thead>
            <tbody>
            {
             studentData.map((value, index) => (
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.contact}</td>
                    <td>{value.email}</td>
                    <td>{value.city}</td>
                    <td>
                        <button type='button' className='btn btn-danger bg-danger text-white'>Delete</button>
                    </td>
                </tr>
             ))   
            }
            </tbody>
        </table>
    </div>
  )
}

export default Calling