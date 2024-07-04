import React from 'react'
import MainSection from '../components/MainSection'
import Navbar from '../components/Navbar'
import BlogSection from '../components/BlogSection'

const Home = () => {
  return (
    <div>
      <Navbar/>
       <MainSection/>
       <BlogSection/>
    </div>
  )
}

export default Home