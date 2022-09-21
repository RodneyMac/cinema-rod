import React from 'react';

const Filter = () => {
  return (
    <div className='flex justify-center items-center my-2'>
      <button className='bg-slate-500 w-28 mx-1 rounded hover:bg-slate-400'>All</button>
      <button className='bg-slate-500 w-28 mx-1 rounded hover:bg-slate-400'>Comedy</button>
      <button className='bg-slate-500 w-28 mx-1 rounded hover:bg-slate-400'>Action</button>
    </div>
  )
}

export default Filter;