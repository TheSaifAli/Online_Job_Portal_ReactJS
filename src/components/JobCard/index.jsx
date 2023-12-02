import React from 'react';
import dayjs from 'dayjs';

const JobCard = (props) => {

    const date1= dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'days');

    const skills = props.skills;
    
  return (
    <div className='bg-white mx-5 rounded-md flex justify-between items-center p-2 my-5 hover:translate-y-1 hover:scale-100 transition-transform ease-in-out duration-150 sm:pl-4 sm:pt-4 sm:pb-4 sm:pr-0 sm:mx-10 md:mx-20 lg:mx-[15rem]  '>
        <div className='flex flex-col gap-2 items-start sm:gap-3 '>
            <h1 className='text-sm font-bold sm:text-lg md:text-xl'>{props.title}</h1>
            <p className='text-[.7rem] sm:text-sm '>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
            <div className='flex gap-2 items-center sm:gap-3'>
                {skills.map((skill,id)=>(
                    <button className='text-[.7rem] border-none ring-1 p-1 rounded-md shadow-md ring-zinc-800 font-medium sm:text-sm sm:p-1.5' key={id}>{skill}</button>
                ))}
            </div>
        </div>
        <div className='flex justify-right items-center flex-col-reverse gap-3 sm:flex-row'>
            <p className='text-[.6rem] text-gray-500 sm:text-sm '>Posted {diffInDays} days age</p>
            <a href={props.job_link}>
            <button className='text-[.8rem] font-semibold px-2 py-1 text-white bg-red-800 border-none rounded-md shadow-md max-sm:hover:rounded-lg sm:hover:rounded-s-xl hover:bg-red-900  transition-all duration-300 sm:text-[1rem] hover:shadow-lg sm:px-5 sm:py-2 sm:rounded-s-[md] sm:rounded-e-none lg:px-10 lg:py-2.5 '>Apply</button>
            </a>
        </div>
    </div>
  )
}

export default JobCard
