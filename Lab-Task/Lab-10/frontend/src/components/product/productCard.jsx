import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function ProductCard(props) {
  const navigate = useNavigate();
  useState(()=>{

  },[])
  function update(){
    console.log('update')
  }
  function del(){
    axios
      .delete(`http://localhost:4000/api/product${props.id}`)
      .then(res =>{navigate('/')} )
      .catch(err => console.error(err));
  }
  return (
    <div className='w-64 bg-gray-900 rounded p-3 m-3 text-white shadow-cyan-500 shadow-md hover:shadow-purple-500'>
        <img className='rounded' src={props.img} alt=''/>
        <h1 className='my-1 text-lg bg-gray-900'>{props.title}</h1>
        <hr />
        <h1 className='my-1 text-green-500 bg-gray-900'>{props.price}</h1>
        <div className='flex justify-around my-2 bg-gray-900'>
            <button onClick={update} className='bg-yellow-500 p-2 rounded'>Update</button>
            <button onClick={del} className='bg-red-500 p-2 rounded'>Delete</button>
        </div>
    </div>
  )
}

export default ProductCard