import React, { useState } from 'react'
import UserStatus from './UserStatus'
import PaginatedUserCards from '../layout/PaginatedUserCards'





const Portfolio:React.FC = () => {
    const [buttonValue, setButtonValue] = useState('asc')
    
  return (
    <div className='w-full h-full p-10'>
        <div className='flex justify-between w-full gap-16 top-0 pb-10'>
            <div>
                <h1>Welcome back, Tofunmi</h1>
                <h4>Track, manage and forecast your customers and orders.</h4>
            </div>
            <div className='h1 flex gap-2'>
                <div>
                    <button type='button' className='bg-white outline-solid rounded-md  px-4 py-2'>import</button>
                </div>
                <div>
                    <button type='button' className='bg-purple-600 outline-green-700 outline-solid text-white rounded-md px-4 py-2'>Add</button>
                </div>
            </div>
            
        </div>
        <UserStatus />
        <div className='search flex my-10 py-4 justify-between w-full bg-gray-500'>
            <div>
                <input type='text' className='outline-solid  outline-black flex-auto w-lg' placeholder='Search for trades'></input>
            </div>
            <div className='flex flex-end'>
                <input type='week' placeholder='Jan 6, 2022 - Jan 13, 2022' className='w-lg'></input>
                <input type='text' placeholder='Filter' className='w-12'></input>
            </div>
        </div>
        <div className='headers pl-16 py-6 flex justify-between w-5xl'>
            <p>Users</p>
            <div className='flex w-sm justify-between'>
                <button type='button' className='px-8' onClick={() => setButtonValue ( buttonValue === 'asc' ? 'desc' : 'asc' )}>Date Joined</button>
                <p>Status</p>
            </div>
        </div>
        <PaginatedUserCards sortBy={buttonValue}/>

    </div>
  )
}

export default Portfolio