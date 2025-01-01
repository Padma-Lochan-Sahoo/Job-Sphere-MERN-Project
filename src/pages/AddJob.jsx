import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import { JobCategories, JobLocations } from '../assets/assets'

const AddJob = () => {

    const [title,setTitle] = useState('')
    const [location,setLocation] = useState('Bangalore')
    const [category,setCategory] = useState('Programming')
    const [level,setLevel] = useState('Beginner level')
    const [salary,setSalary] = useState('Beginner level')

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(()=>{
        //Initiate Quill only once
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current,{
                theme:'snow',
            })
        }
    },[])

  return (
    <form className='container p-4 flex flex-col w-full gap-3 items-start'>
        <div className='w-full'> 
        <p className='mb-2'>Job Title</p>
        <input type="text" placeholder='Type here'
        onChange={e => setTitle(e.target.value)}
        value={title}
        required
        className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
        />
    </div>
    <div className='w-full max-w-lg'>
        <p className='my-2'>Job Description</p>
        <div ref={editorRef}>

        </div>
    </div>
    <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
            <p className='mb-2'>Job Category</p>
            <select 
            className='w-full px-3 py-2 border-2 border-gray-300 rounded'
            onChange={e=> setCategory(e.target.value)}>
                {JobCategories.map((category,index)=>(
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>

        <div>
            <p className='mb-2'>Job Location</p>
            <select 
            className='w-full px-3 py-2 border-2 border-gray-300 rounded'
            onChange={e=> setLocation(e.target.value)}>
                {JobLocations.map((location,index)=>(
                    <option key={index} value={location}>{location}</option>
                ))}
            </select>
        </div>

        <div>
            <p className='mb-2'>Job Level</p>
            <select 
            className='w-full px-3 py-2 border-2 border-gray-300 rounded'
            onChange={e=> setLevel(e.target.value)}>
                <option value="Beginner Level">Beginner Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
        </div>
    </div>
    <div>
        <p className='mb-2'>Job Salary</p>
        <input type="Number" placeholder='2500' 
        min={0}
        className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]'
        onChange={e=>setSalary(e.target.value)}
        />
    </div>
    <button
    className='w-28 py-3 mt-4 bg-black text-white rounded'
    >Add</button>
    </form>
  )
}

export default AddJob