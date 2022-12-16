import React from 'react'

function Card() {
  return (
    <div className='bg-gray-800 w-72 m-4 p-4 text-white rounded'>
        <img className='rounded' src='https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <h1 className='text-lg'>Title of the Card</h1>
        <p className='text-red-500'>Rs. 3000</p>
        <hr />
        <p>details of the product</p>
        <button className='w-full bg-yellow-300 rounded text-white my-2 py-1 text-lg'>Buy</button>
    </div>
  )
}

export default Card