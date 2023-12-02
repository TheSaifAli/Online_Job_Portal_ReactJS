import React, { useState } from 'react'

const SearchBar = (props) => {

  const [jobCriteria,setJobCriteria] = useState({
    title:"",
    location:"",
    experience:"",
    type:""
  })

  const handleChange =(e)=>{
    setJobCriteria(prevState=>(
       { 
        ...prevState,
        [e.target.name]:e.target.value  
       }
    ))
  };
  const search = ()=>{
      props.fetchingDummyCustomData(jobCriteria);
  }
   
  return (
    <div className='mx-2 flex flex-wrap gap-2 justify-center items-center searchBarStyle lg:gap-3  ' 
    >
      <select onChange={handleChange} name="title" value={jobCriteria.title} id="" className=''>
        <option className='rounded-md' disabled hidden value="" defaultValue="">Job Role</option>
        <option value="IOS Developer">IOS Developer</option>
        <option value="Fronted Developer">Fronted Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
      </select>
      <select onChange={handleChange} name="type" value={jobCriteria.type} id="" className=''>
        <option className='rounded-md' value="" disabled hidden selected>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
        
      </select>
      <select onChange={handleChange} name="location" value={jobCriteria.location} id="" className=''>
        <option className='rounded-md' value="" disabled hidden selected>Location</option>
        <option value="Remote">Remote</option>

        <option value="Office">Office</option>
        <option value="Work From Home">Work From Home</option>
      </select>
      <select onChange={handleChange} name="experience" value={jobCriteria.experience} id="" className=''>
        <option className='rounded-md' value="" disabled hidden selected>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button onClick={search} className='w-32  py-1 bg-red-700 text-sm text-white font-semibold shadow-md border border-red-700 rounded-md hover:border-red-800  hover:bg-red-800 lg:text-[1rem] lg:w-40 lg:py-2  transition-all'>Search</button>
    </div>
  )
}

export default SearchBar
