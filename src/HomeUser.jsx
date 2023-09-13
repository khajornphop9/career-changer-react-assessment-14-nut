import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'

const HomeUser = () => {
  return (
    <div>
      <Layout>
      <Hero subtitle="Home - User Sector"/>
      </Layout>
      <div className='hero-flex' style={{ margin:"2rem"}}>
    <table className='table1-user' style={{ width:"50%"}}>
      <thead>
  <tr>
    <th>Name</th>
    <th>Lastname</th>
    <th>Position</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  </tbody>
</table>
    </div>
    </div>
  )
}

export default HomeUser