import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'

const HomeAdmin = () => {
  return (
    <div>
      <Layout>
      <Hero subtitle="Home - Admin Sector"/>

      <h2 style={{ marginLeft:"7rem"}}>Create User Here</h2>

      <div className="form-admin-create-user-container">


        <input className='input-margin' type="text" placeholder='Name'/>
        <input className='input-margin' type="text" placeholder='Lastname'/>
        <input className='input-margin' type="text" placeholder='Position'/>
        <div>

        <button className='btn-admin-save'>Save</button>
        </div>
      </div>


    <div className='hero-flex' style={{ margin:"2rem"}}>
    <table className='table1-admin' style={{ width:"50%"}}>
      <thead>
  <tr>
    <th>Name</th>
    <th>Lastname</th>
    <th>Position</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  
  </tbody>
</table>
    </div>

    </Layout>
    </div>
  )
}

export default HomeAdmin